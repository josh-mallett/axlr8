// node_modules
import React from 'react';
import {Platform} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// local
import Home from '../home';
import Analytics from '../analytics';
import Accounts from '../accounts';
import Actions from '../actions';
import Settings from '../settings';

const MainNavigation = createBottomTabNavigator(
  {
    Home: Home,
    Analytics: Analytics,
    Accounts: Accounts,
    Actions: Actions,
    Settings: Settings
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const {routeName} = navigation.state;
        let iconName = Platform.OS === 'android' ? 'md-' : 'ios-';

        switch (routeName) {
          case 'Home': 
            iconName += 'home';
            break;
          case 'Analytics': 
            iconName += 'analytics';
            break;
          case 'Accounts':
            iconName += 'person';
            break;
          case 'Actions':
            iconName += 'heart';
            break;
          case 'Settings':
            iconName += 'settings';
            break;
          default: 
            iconName = '';
            break;
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#2196F3',
      inactiveTintColor: '#9E9E9E'
    }
  }
);

export default MainNavigation;