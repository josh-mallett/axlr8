import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CardTitle = (props) => {
    return (
      <View>
        <Text style={styles.title}>{props.text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    paddingVertical: 10,
    color: 'black',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'rgb(90,90,90)'
  }
});

export default CardTitle;