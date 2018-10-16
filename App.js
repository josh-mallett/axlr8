import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {MainNavigation} from './components/navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0BEC5'
  }
});

export default App;