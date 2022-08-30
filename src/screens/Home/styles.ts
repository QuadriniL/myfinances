import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:60px 20px 25px 20px;
  background-color: ${({ theme }) => theme.COLORS.REVENUE};
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const UserNameTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  `;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  margin-right: 10px;
  border: 5px solid ${({ theme }) => theme.COLORS.LIGTH_REVENUE};
  border-radius: 32px;
`;

export const SalutationText = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const SaluationView = styled.View`
margin-left: 8px`;

export const FeedContainer = styled.ScrollView`
  flex: 1;
  padding: 8px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const AccountsContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 16px 0;
`;

export const AccountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AccountLogo = styled.Image`
  width: 36px;
  height: 36px;
`;

export const AccountTitle = styled.Text`
  font-size: 16px;
  margin-left: 8px;
  `;

export const AccountAmount = styled.Text`
  color: ${({ theme }) => theme.COLORS.REVENUE};
  font-size: 16px;
  font-weight: bold;
`;

export const AccountManageButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.REVENUE_OPACITY};
  flex: 1;
  margin: 16px 0;
  padding: 8px;
`;

export const AccountManageButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.DARK_REVENUE};
  font-weight: bold;
`;
