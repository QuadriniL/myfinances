import {
  Container,
  DisplayView,
  Header,
  ItemList,
  TransactionDescription,
  TransactionDescriptionContainer,
  TransactionAccount,
  TransactionAmount, Row
} from './styles'
import { Text, TouchableOpacity} from "react-native";
import {Entypo} from "@expo/vector-icons";
import theme from '../../theme/index';
import React from "react";

export class Transactions extends React.Component<any, any>{
  constructor() {
    // @ts-ignore
    super();
    this.state = { transactions: [
        {
          description: 'teste',
          amount: 2
        },
        {
          description: 'teste',
          amount: -2
        },
        {
          description: 'teste',
          amount: 2
        },
      ]}
  }

  render() {
    return (
        <DisplayView>
          <Header>
            <Text style={{
              color: theme.COLORS.TEXT_SECONDARY,
              fontWeight: "bold",
              fontSize: 18
            }}>Movimentações</Text>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
              <Entypo name="magnifying-glass" size={24} color={theme.COLORS.TEXT_SECONDARY}/>
            </TouchableOpacity>
          </Header>
          <Container>
            {
              this.state.transactions.map((t: { description: string, amount: number }, index: number) => (
                  <>
                  <ItemList key={index}>
                    <TransactionDescriptionContainer>
                      <TransactionDescription>
                        {t.description}
                      </TransactionDescription>
                      <TransactionAccount>
                        {t.description}
                      </TransactionAccount>
                    </TransactionDescriptionContainer>
                    <TransactionAmount value={t.amount}>
                      R$ {t.amount.toFixed(2).replace('.', ',').replace('-', '- ')}
                    </TransactionAmount>

                  </ItemList>
              <Row />
                  </>
              ))
            }
          </Container>

        </DisplayView>
    )
  }


}