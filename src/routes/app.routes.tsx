import React from 'react';
import {Platform} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';

import {Dashboard} from '../screens/Dashboard';
import {Register} from '../screens/Register';
import {useTheme} from 'styled-components';

const {Navigator, Screen} = createBottomTabNavigator();

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.text,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
        },
      }}>
      <Screen
        name="List"
        component={Dashboard}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons
              size={size}
              color={color}
              name="format-list-bulleted"
            />
          ),
        }}
      />
      <Screen
        name="Add"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="attach-money" />
          ),
        }}
      />
      <Screen
        name="Overal"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="pie-chart" />
          ),
        }}
      />
      <Screen
        name="qq"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons size={size} color={color} name="pie-chart" />
          ),
        }}
      />
    </Navigator>
  );
};
