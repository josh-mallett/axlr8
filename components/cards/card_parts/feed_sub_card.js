import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

export default class FeedSubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback 
        onPress={() => console.log('hello')}
        style={styles.container}
        underlayColor={this.props.bgColor}
      >
        <View style={styles.card}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  card: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  text: {
    marginHorizontal: 14
  },
  icon: {
    width: 75,
    height: 75,
    marginHorizontal: 8
  }
});