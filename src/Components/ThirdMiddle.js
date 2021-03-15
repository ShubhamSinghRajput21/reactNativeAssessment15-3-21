import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Zoylo Health Checkup with Iron Studies',
    items: '83',
    pos: 1,
  },
  {
    id: '2',
    title: 'Fever Package 3',
    items: '63',
    pos: 2,
  },
  {
    id: '3',
    title: 'Female Comprehensive Pack',
    items: '53',
    po: 3,
  },
  {
    id: '4',
    title: 'Zoylo Health Checkup with Iron ',
    items: '93',
    pos: 4,
  },
  {
    id: '5',
    title: 'Zoylo Health Checkup with ',
    items: '73',
    pos: 5,
  },
];

const Card = ({title, items, key, pos}) => {
  const handleClick = msg => Alert.alert('Alert', msg);

  return (
    <View Key={key} style={styles.cardContainer}>
      <View
        style={
          pos % 2 === 0 ? styles.cardTopContainerX : styles.cardTopContainerY
        }>
        <TouchableOpacity
          style={styles.advanceBtn}
          onPress={() => handleClick(`${title} is Clicked`)}>
          <Text style={styles.cardText1}>ADVANCED</Text>
        </TouchableOpacity>
        <Text>{title}</Text>
        <Text style={styles.test}>{items} tests included</Text>
      </View>
      <View style={styles.cardBottomContainer}>
        <Text style={styles.originalPriceText}>₹ 3250.00</Text>
        <View style={styles.rupeesContainer}>
          <Text style={styles.currentPriceText}>₹ 1299.00</Text>
          <View style={styles.offView}>
            <Text style={styles.off}>60% off</Text>
          </View>
        </View>
        <Text style={styles.zoyloLabs}>ZOYLO LABS</Text>
        <TouchableOpacity onPress={() => handleClick('Book now is Clicked')}>
          <Text style={styles.bookNow}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default class ThirdMiddle extends Component {
  handleClick = msg => Alert.alert('Alert', msg);
  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText1}>
            Diagnostics Packages by Zoylo Labs
          </Text>
          <TouchableOpacity
            onPress={() => this.handleClick('View All is Clicked')}>
            <Text style={styles.headerText2}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalScrollview}>
          <ScrollView horizontal={true}>
            {DATA.map(item => {
              return (
                <Card
                  title={item.title}
                  items={item.items}
                  key={item.id}
                  pos={item.pos}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  headerText1: {
    fontSize: 16,
  },
  headerText2: {
    fontSize: 14,
    color: '#ffbb00',
  },
  cardContainer: {
    width: 150,
    height: 250,
    backgroundColor: '#fff',
    marginLeft: 10,
    elevation: 5,
  },
  horizontalScrollview: {
    height: 260,
    marginTop: 10,
  },
  cardTopContainerY: {
    flex: 0.5,
    backgroundColor: '#e6ccff',
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  cardTopContainerX: {
    flex: 0.5,
    backgroundColor: '#c1d9e3',
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  cardBottomContainer: {
    flex: 0.5,
    paddingLeft: 10,
    justifyContent: 'space-evenly',
  },
  advanceBtn: {
    borderRadius: 15,
    backgroundColor: '#fff',
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText1: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  test: {
    color: 'grey',
  },
  rupeesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  originalPriceText: {
    textDecorationLine: 'line-through',
  },
  currentPriceText: {
    color: 'green',
  },
  offView: {
    borderWidth: 1,
    borderColor: 'green',
    borderStyle: 'dashed',
    borderRadius: 5,
  },
  off: {
    paddingHorizontal: 10,
    color: 'green',
  },
  bookNow: {
    fontSize: 14,
    color: '#ffbb00',
  },
});
