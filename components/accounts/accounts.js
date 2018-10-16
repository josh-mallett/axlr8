import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ChangeAccountCard from '../cards/change_account_card';


export default class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <ChangeAccountCard bgColor={'#E3F2FD'} title={'Trevyn201'}/>
        <ChangeAccountCard bgColor={'#FFFFFF'} title={'j__malley'}/>
        <ChangeAccountCard bgColor={'#FFFFFF'} title={'50dkp.fitness'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});