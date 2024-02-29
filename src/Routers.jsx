import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Forgot from './Router/Forgot';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import Bottomtabs from './Router/Bottomtabs';
import Login from './Router/Login';
import { Button } from 'react-native-paper';
import SoftButton from './Router/Button';
import Cardone from './Router/Card';
import Mycheck from './Router/Checkbox';
import Dial from './Router/Dialog';
import Forgotone from './Router/Forgotone';
import Icons from './Router/Icons';
import List from './Router/List';
import Loginone from './Router/Loginone';
import Logintwo from './Router/Logintwo';
import Scroll from './Router/Scrollview';
import search_bar from './Router/searchbar';
import Switchone from './Router/Switch';
import Toptabs from './Router/Toptabs';
const Stack = createStackNavigator();
const Routers = () => {
  return (
 <>
  <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="forgot" component={Forgot} />
        <Stack.Screen name="bottomtabs" component={Bottomtabs} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="smart-button" component={SoftButton} />
        <Stack.Screen name="card" component={Cardone} />
        <Stack.Screen name="check" component={Mycheck} />
        <Stack.Screen name="dail" component={Dial} />
        <Stack.Screen name="forgotone" component={Forgotone} />
        <Stack.Screen name="icons" component={Icons} />
        <Stack.Screen name="list" component={List} />
        <Stack.Screen name="loginone" component={Loginone} />
        <Stack.Screen name="Scrollview" component={Scroll} />
        <Stack.Screen name="Searchbar" component={search_bar} />
        <Stack.Screen name="Switch" component={Switchone} />
        <Stack.Screen name="Toptabs" component={Toptabs} />
        
      </Stack.Navigator>
    </NavigationContainer>
 </>
  )
}

export default Routers
