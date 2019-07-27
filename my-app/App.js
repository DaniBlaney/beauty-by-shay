import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Home from './components/home'
import { red } from 'ansi-colors';

export default function App() {
  return (<>
    <Home />
    <View style={styles.container}>
      <Text style={styles.construction}>Website under construction</Text>
    </View>
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
  construction:{
    color: 'red',
  }
});
