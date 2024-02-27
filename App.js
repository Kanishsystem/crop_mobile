import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login2 from './src/pages/Login2';
import Login3 from './src/pages/Login3';
import Forgot from './src/pages/Forgot';
import Login from './src/pages/Login';
import Forgot1 from './src/pages/Forgot1';
import Paper1 from './src/pages/Paper1';
import Paper2 from './src/pages/Button';
import Paper from './src/pages/Button';
import Cardone from './src/pages/Card';
import Check from './src/pages/Checkbox';
import Mycheck from './src/pages/Checkbox';
import Dial from './src/pages/Dialog';

export default function App() {
  return (
  <>
  <Dial/>
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
