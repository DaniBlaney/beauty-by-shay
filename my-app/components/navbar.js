import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default function ComponentWithNavigationBar() {
  return (
    <View style={styles.container}>
      <NavigationBar
        title={titleConfig}
        leftButton={leftButtonConfig}
        rightButton={rightButtonConfig}
      />
    </View>
  );
}

const styles = {
  container: {
    marginTop: 5,
    flex: 1,
  },
};

const leftButtonConfig ={
  title: 'Home',
  handler: () => alert('Error sorry dude')
}

const rightButtonConfig = {
  title: 'Gallery',
  handler: () => alert('Oops not working yet'),
};

const titleConfig = {
  title: 'Welcome!',
};
