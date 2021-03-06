import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { AccountCardTitle, FeedSubCard } from '../card_parts';

export default class AccountFeedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const subCards = this.props.subCards.map((card, i) => {
      return <FeedSubCard key={i} title={card.text}/>;
    });

    return (
      <TouchableWithoutFeedback onPress={() => console.log('hello')}>
        <View style={[styles.card, {backgroundColor: this.props.bgColor}]}>
          <AccountCardTitle text={this.props.title} />
          {subCards}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  title: {
    marginHorizontal: 6,
    color: 'black',
    fontSize: 22
  },
  icon: {
    width: 75,
    height: 75,
    marginHorizontal: 8
  }
});