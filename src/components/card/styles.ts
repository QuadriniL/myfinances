import styled from "styled-components/native";

export const CardView = styled.View`
  flex: 1;
  margin: 8px 0;
  width: 90%;
  align-self: center;
  justify-content: center;
  padding: 8px 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.TEXT};
  elevation: 2;
  shadowColor: '#52006A',
`;

export const CardHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0px;
  color: ${({theme}) => theme.COLORS.TEXT_SECONDARY};
`;