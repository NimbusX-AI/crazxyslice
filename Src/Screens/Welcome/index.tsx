import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';



export type Props = {
  navigation: any;
};


const Welcome = (props: any) => {
  const { navigation } = props;



  return (

    <SafeAreaView style={Styles.backgroundWrapper}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        <View style={Styles.headerContainer}>
          <Image source={Images.welcomeLogo} style={Styles.logoIcon} />
          <Text style={Styles.logoText}>{"Accountable"}</Text>
          <Text style={Styles.text}>{"Achieve your fitness goals with accountability"}</Text>
        </View>


        <View style={Styles.bottomContainer}>
          <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}
            style={Styles.sendButton}>
            <Text style={Styles.sendTitle}>{`Get started`}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}
            style={Styles.registerButton}>
            <Text style={Styles.registerTitle}>{`Don't have an account? Sign up`}</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

export default Welcome;


