import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  Splash, 
  Home, 
  ListJerseys, 
  Profile, 
  JerseyDetail, 
  Keranjang, 
  Checkout, 
  EditProfile,
  ChangePassword,
  History,
  Login,
  Register1,
  Register2
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from '../components/besar';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
  <Tab.Navigator  tabBar={props => <BottomNavigation {...props}/>}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="ListJersey" component={ListJerseys} options={{title:'Jersey', headerShown: false}} />
      <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}


const Router = () => {
    return (
         <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
      name="Splash" 
      component={Splash} 
      options={{headerShown: false}}
      />
        <Stack.Screen 
        name="MainApp" 
        component={MainApp} 
        options={{headerShown: false}}
        />
      
      <Stack.Screen
      name="JerseyDetail"
      component={JerseyDetail}
      options={{headerShown: false}}
      />

    <Stack.Screen
      name="Keranjang"
      component={Keranjang}
      />

    <Stack.Screen
      name="Checkout"
      component={Checkout}
      />

<Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{title:'Edit Profile'}}
      />

<Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{title:'Ganti Password'}}
      />
<Stack.Screen
      name="History"
      component={History}
      options={{title:'History Pemesanan'}}
      />

<Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
      />

<Stack.Screen
      name="Register1"
      component={Register1}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="Register2"
      component={Register2}
      options={{headerShown: false}}
      />

      </Stack.Navigator>
    )
}

export default Router
