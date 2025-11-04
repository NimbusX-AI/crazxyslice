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
import Images from '../../Styles/Images';

export type Props = {
  navigation: any;
};

const Splash = (props: any) => {
  const { navigation } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Welcome")
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (

    <SafeAreaView style={Styles.backgroundWrapper}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        <Image source={Images.logo} style={Styles.logoIcon} />

      </View>
    </SafeAreaView>
  );
}

export default Splash;


