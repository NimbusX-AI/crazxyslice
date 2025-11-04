import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';

export type Props = {
  navigation: any;
};

const Search = (props: any) => {
  const { navigation } = props;

  return (

    <SafeAreaView style={Styles.backgroundWrapper}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>


      </View>
    </SafeAreaView>
  );
}

export default Search;


