import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, TouchableOpacity} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SecondMiddle extends Component {
  handleClick = msg => Alert.alert('Alert', msg);
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.contentsContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.handleClick('Doctor Appointment is Pressed')}>
            <Fontisto name="stethoscope" size={20} color="#9B59B6" />
          </TouchableOpacity>
          <Text style={styles.text}>Doctor {'\n'}Appointment</Text>
        </View>
        <View style={styles.contentsContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.handleClick('Wellness Packages is Pressed')}>
            <Fontisto name="shopping-package" size={20} color="#9B59B6" />
          </TouchableOpacity>
          <Text style={styles.text}>Wellness {'\n'}Packages</Text>
        </View>
        <View style={styles.contentsContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.handleClick('Ask Zoy is Pressed')}>
            <FontAwesome5 name="robot" size={20} color="#9B59B6" />
          </TouchableOpacity>
          <Text style={styles.text}>Ask {'\n'}Zoy</Text>
        </View>
        <View style={styles.contentsContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.handleClick('Home HealthCare is Pressed')}>
            <MaterialCommunityIcons
              name="home-heart"
              size={30}
              color="#9B59B6"
            />
          </TouchableOpacity>
          <Text style={styles.text}>Home {'\n'}Healthcare</Text>
        </View>
        <View style={styles.contentsContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.handleClick('Hospital Packages is Pressed')}>
            <Octicons name="package" size={20} color="#9B59B6" />
          </TouchableOpacity>
          <Text style={styles.text}>Hospital {'\n'}Packages</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 0.3,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
  },
  contentsContainer: {
    alignItems: 'center',
  },
});
