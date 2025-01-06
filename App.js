import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Oction from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="pluscircleo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Oction name="people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Oction name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
