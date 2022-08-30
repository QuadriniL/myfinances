import React, {useEffect} from 'react';
import {Text, Button, TouchableOpacity, ScrollView, View} from 'react-native';
import {
  Container,
  Header,
  UserContainer,
  UserNameTitle,
  Avatar,
  SalutationText,
  SaluationView,
  FeedContainer,
  AccountsContainer,
  AccountContainer,
  AccountLogo,
  AccountTitle,
  AccountAmount,
  AccountManageButton, AccountManageButtonText
} from './styles'
import {Card} from "../../components/card";


export function Home(props: any) {
  const [user, setUser] = React.useState('Lucas');
  const [time, setTime] = React.useState('Bom dia');

  useEffect(() => {
    if (new Date().getHours() - 3 > 6 && new Date().getHours() - 3 < 12) {
      setTime('Boa dia');
    } else if (new Date().getHours() -3 >= 12) {
      setTime('Boa tarde');
    } else {
      setTime('Boa noite');
    }
  })

  return (
      <>
        <Header>
          <UserContainer>
              <TouchableOpacity><Avatar source={{uri: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'}} /></TouchableOpacity>
              <SaluationView>
                <SalutationText>
                  {time}
                </SalutationText>
              <UserNameTitle>{
                user
              }</UserNameTitle>
                </SaluationView>
          </UserContainer>
          <TouchableOpacity><Text>Config</Text></TouchableOpacity>
        </Header>
      <Container>
        <FeedContainer>
          <Card title={
            'Minhas contas'
          }>
            <View>
              <AccountsContainer>
                <AccountContainer>
                  <AccountLogo source={{uri: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'}} />
                  <AccountTitle>
                    Conta 1
                  </AccountTitle>
                </AccountContainer>
                <AccountAmount>
                  R$ 0,00
                </AccountAmount>
              </AccountsContainer>
              <AccountManageButton>
                <AccountManageButtonText>
                  Gerenciar contas
                </AccountManageButtonText>
              </AccountManageButton>
            </View>
          </Card>
        </FeedContainer>
      </Container>

      </>
  );
}
