import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FeedCard, AccountFeedCard } from '../cards';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    const subCards = {
      recentActivity: [
        {
          text: 'You followed 367 people'
        },
        {
          text: 'You gained 567 followers'
        },
        {
          text: 'You DM\'d 63 people'
        }
      ],
      Ad: [
        {
          text: 'Buy Star Child-O\'s, the best breakfast cereal in the universe!'
        }
      ],
      accFeedCard: [
        {
          text: 'Followers: 17,261'
        },
        {
          text: 'Following: 3'
        },
        {
          text: 'Posts: 1,092'
        }
      ]
    };
    return (
      <View style={styles.container}>
        <AccountFeedCard bgColor={'white'} title={'Trevyn201'} subCards={subCards.accFeedCard}/>
        <FeedCard bgColor={'white'} title={'Recent Activity'} subCards={subCards.recentActivity}/>
        <FeedCard bgColor={'#81D4FA'} title={'Ad Title'} subCards={subCards.Ad}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});
