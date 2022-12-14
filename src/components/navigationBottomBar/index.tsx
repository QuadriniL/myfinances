import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Theme from "../../theme";
import {Home} from "../../screens/Home";
import { Entypo, AntDesign } from '@expo/vector-icons'
import {Transactions} from "../../screens/Transactions";
import {View} from "react-native";
import AddTransaction from "../../screens/AddTransaction";

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: '#FFF',
        tabBarInactiveTintColor: Theme.COLORS.LIGTH_TEXT,
        tabBarActiveTintColor: Theme.COLORS.REVENUE,
        tabBarStyle: {
          paddingBottom: 0,
          paddingTop: 10,
          height: 60,
        },
        title: '',
        headerTitle: '',
        headerStyle: {
          height: 0,
        }
      }}
      >
        <Tab.Screen name="home" component={Home} options={{
          tabBarLabel: '',
          headerPressColor: Theme.COLORS.LIGTH_REVENUE,
          tabBarIcon: ({ color }) => (
              <Entypo name="home" size={30} color={color} />
          ),
        }} />
        <Tab.Screen name="add" component={AddTransaction} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            if (color === Theme.COLORS.REVENUE) {
              return (
                    <AntDesign name="close" size={30} color={Theme.COLORS.EXPENSES} />
              )
            }
            return (
                <View style={{
                  width: 80,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Theme.COLORS.REVENUE,
                }}>
                  <AntDesign name="plus" size={30} color={Theme.COLORS.TEXT}/>
                </View>

            )
          },
        }} />
        <Tab.Screen key="transactions" name="transactions" component={Transactions} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
              <AntDesign name="swap" size={30} color={color} />
          ),
        }} />

      </Tab.Navigator>
  );
}