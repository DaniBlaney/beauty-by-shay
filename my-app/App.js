import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Home from './components/home'

export default function App() {
  return (<>
    <Home />
    <View style={styles.container}>
      <Text>Beauty By Shay</Text>
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
});
