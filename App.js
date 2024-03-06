import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Login2 from './src/Router/Login2';
// import Login3 from './src/Router/Login3';
import Forgot from './src/Router/Forgot';
// import Login from './src/Router/Login';
// import Forgotone from './src/Router/Forgotone';
// import Paper1 from './src/Router/Paper1';
// import Paper2 from './src/Router/Button';
// import Paper from './src/Router/Button';
// import Cardone from './src/Router/Card';
// import Check from './src/Router/Checkbox';
// import Mycheck from './src/Router/Checkbox';
// import Dial from './src/Router/Dialog';
// import Fab from './src/Router/Fab';
// import Apps from './src/Router/Appbar';
// import List from './src/Router/List';
// import TopViewContent from './src/Router/Topview';
// import Appss from './src/Router/Topview';
// import Bottom from './src/Router/Bottomtabs';
// import Search from './src/Router/searchbar';
// import Switchone from './src/Router/Switch';
// import Top from './src/Router/Topview';
// import Icons from './src/Router/Icons';
// import TouchableHighlight from './src/Router/Touch';
// import Scrollviewex from './src/Router/Touchableopacity';
// import TouchableOpacityExample from './src/Router/Touchableopacity';
// import Scroll from './src/Router/Scrollview';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/Routers';
import Toptabs from './src/Router/Toptabs';
import Cards from './src/Router/cards';

 const Stack = createStackNavigator();

export default function App() {
  return (
  <>
 
 <Routers/>
  
   

  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
