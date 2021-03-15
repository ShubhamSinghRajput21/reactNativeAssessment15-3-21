import React, {Component} from 'react';
import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import Header from '../Components/Header';
import ImageSlider from '../Components/ImageSlider';
import FirstMiddle from '../Components/FirstMiddle';
import SecondMiddle from '../Components/SecondMiddle';
import ThirdMiddle from '../Components/ThirdMiddle';

export default class ZoyloHome extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <Header />
          <ImageSlider />
          <FirstMiddle />
          <SecondMiddle />
          <ThirdMiddle />
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({});
