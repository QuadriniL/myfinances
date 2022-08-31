import styled from 'styled-components/native';

export const DisplayView = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.REVENUE};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
  padding: 40px 16px 16px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 8px 0;
  width: 100%;
`;

export const Row = styled.View`
  width: 100%;
  border: solid ${({theme}) => theme.COLORS.LIGTH_TEXT} 0.2px;
  height: 0;
  padding: 0;
`;

export const ItemList = styled.View`
  align-items: flex-start;
  flex-direction: row;
  padding: 8px 16px;
  justify-content: space-between;
  width: 100%;
`;

export const TransactionDescriptionContainer = styled.View``;

export const TransactionAccount = styled.Text`
  color: ${({theme}) => theme.COLORS.LIGTH_TEXT}
`;

export const TransactionDescription = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.TEXT_SECONDARY}
`;

export const TransactionAmount = styled.Text`
  color: ${(props) => {
    // @ts-ignore
    if (props.value > 0)
      return props.theme.COLORS.REVENUE;
    return props.theme.COLORS.EXPENSES;
  }};
  font-weight: bold;
  font-size: 16px;
  
`;