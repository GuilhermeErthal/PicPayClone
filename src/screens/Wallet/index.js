import React from 'react';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold, 
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardDetails,
    CardTitle,
    CardInfo,
} from './styles';

export default function Wallet() {
    return (
        <Wrapper>
            <Header colors={['#52e78c', '#1ab563' ]}> 
                <HeaderContainer>
                    <Title>Saldo PipPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>0,00</Bold>
                        </Value>

                        <EyeButton>
                            <Feather name="eye" size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>
                        Seu saldo está rendendo 100% do CDI
                    </Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>                       
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>

                <Switch />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>
                    Forma de pagamento
                </PaymentMethodsTitle>
           

                <Card>
                    <CardDetails>
                        <CardTitle>
                            Cadastre seu cartão de crédito
                        </CardTitle>
                        <CardInfo>
                            Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
                            quando não tiver saldo no seu PicPay
                        </CardInfo>
                    </CardDetails>
                </Card>
            </PaymentMethods>
        </Wrapper>
    );
}