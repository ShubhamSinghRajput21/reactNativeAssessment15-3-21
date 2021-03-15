import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default class FirstMiddle extends Component {
  handleClick = msg => Alert.alert('Alert', msg);
  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.contentContainer}
          onPress={() => this.handleClick('Medicines Tab is Pressed')}>
          <Fontisto name="pills" size={30} color="#9B59B6" />
          <Text style={styles.text}>Medicines</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contentContainer}
          onPress={() => this.handleClick('Test & Packages Tab is Pressed')}>
          <Image
            source={require('../Assets/microscope.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Test & {'\n'}Packages</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contentContainer}
          onPress={() =>
            this.handleClick('Online consultation Tab is Pressed')
          }>
          <Fontisto name="tv" size={30} color="#9B59B6" />
          <Text style={styles.text}>Online Consultation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-evenly',
  },
  contentContainer: {
    width: '30%',
    height: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    paddingVertical: 15,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    height: 30,
    width: 30,
  },
});
