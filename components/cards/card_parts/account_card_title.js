import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const AccountCardTitle = (props) => {
    return (
      <View style={styles.accountCardTitle}>
        <View style={styles.profileImage}></View>
        <Text style={styles.title}>{props.text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  accountCardTitle: {
    width: '95%',
    height: 85,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    //borderBottomWidth: 1,
    borderColor: 'rgb(90,90,90)'
  },
  title: {
    marginHorizontal: 5,
    paddingVertical: 5,
    color: 'black',
    fontSize: 20
  },
  profileImage: {
    width: 65,
    height: 65,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: 'rgb(120,120,120)',
    borderRadius: 50
  }
});

export default AccountCardTitle;