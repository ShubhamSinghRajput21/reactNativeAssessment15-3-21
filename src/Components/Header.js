import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Header extends Component {
  handleClick = msg => Alert.alert('Alert', msg);
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.mainLogoImage}
          source={require('../Assets/mainLogo2.png')}
        />
        <View style={styles.headerInner}>
          <TouchableOpacity
            onPress={() => this.handleClick('Location Icon is Pressed')}>
            <Entypo name="location-pin" size={40} color="#ffbb00" />
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <AntDesign name="shoppingcart" size={40} color="#9B59B6" />
          <TouchableOpacity
            style={styles.cartValue}
            onPress={() => this.handleClick('Shopping Cart is Pressed')}>
            <Text>0</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 8,
  },
  mainLogoImage: {
    height: 80,
    width: '30%',
  },
  headerInner: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    borderRightWidth: 1,
    marginHorizontal: 10,
    height: 15,
  },
  cartValue: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    alignItems: 'center',
  },
});
