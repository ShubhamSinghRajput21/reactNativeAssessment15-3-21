import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ZoyloHome from '../Screens/ZoyloHome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function SearchScreen() {
  return (
    <View style={styles.mainStyle}>
      <Text>Search Screen!</Text>
    </View>
  );
}

function CallScreen() {
  return (
    <View style={styles.mainStyle}>
      <Text>Call Screen!</Text>
    </View>
  );
}
function NotificationsScreen() {
  return (
    <View style={styles.mainStyle}>
      <Text>Notifications Screen!</Text>
    </View>
  );
}
function AccountScreen() {
  return (
    <View style={styles.mainStyle}>
      <Text>Account Screen!</Text>
    </View>
  );
}

export default class BottomTab extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#9B59B6',
            labelStyle: {fontSize: 14, fontWeight: 'bold'},
            style: {
              height: 60,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={ZoyloHome}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return <AntDesign name="home" size={30} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return <AntDesign name="search1" size={30} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Call"
            component={CallScreen}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <Image
                    source={require('../Assets/call.png')}
                    style={styles.callImage}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <Ionicons
                    name="notifications-outline"
                    size={30}
                    color={color}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return <AntDesign name="user" size={30} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callImage: {
    position: 'absolute',
    height: 50,
    width: 50,
    bottom: 10,
  },
});
