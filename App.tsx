import { StatusBar } from 'expo-status-bar';
import {ThemeProvider} from "styled-components";
import { NavigationContainer } from '@react-navigation/native';
import THEME from "./src/theme";
import MyTabs from "./src/components/navigationBottomBar";

export default function App() {
  return (
      <ThemeProvider theme={THEME}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ThemeProvider>
  );
}

