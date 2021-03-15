import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';

const DATA = [
  {id: '1', url: require('../Assets/1img.png')},
  {id: '2', url: require('../Assets/2img.jpeg')},
  {id: '3', url: require('../Assets/3img.jpeg')},
  {id: '4', url: require('../Assets/4img.jpeg')},
  {id: '5', url: require('../Assets/1img.png')},
];

const Item = ({url}) => {
  return <Image source={url} style={styles.image} />;
};

export default class ImageSlider extends Component {
  renderItem = ({item}) => {
    return <Item url={item.url} />;
  };
  render() {
    return (
      <View style={styles.sliderContainer}>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderContainer: {
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
