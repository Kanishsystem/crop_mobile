import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login2 from './src/pages/Login2';
import Login3 from './src/pages/Login3';
import Forgot from './src/pages/Forgot';
import Login from './src/pages/Login';
import Forgot1 from './src/pages/Forgot1';

export default function App() {
  return (
  <>
  <Forgot1 />
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
