import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';
import Ionic from 'react-native-vector-icons/Ionicons';


export type Props = {
  navigation: any;
};

const Settings = (props: any) => {
  const { navigation } = props;

  const DATA = [
    {
      id: '1',
      title: `Language`
    },
    {
      id: '2',
      title: `Notifications`
    },
    {
      id: '3',
      title: `Account Settings`
    },
    {
      id: '4',
      title: `Support`
    },
  ]

  return (

    <SafeAreaView style={Styles.backgroundWrapper}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerTitle}>{`Settings`}</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>


            <TouchableOpacity style={Styles.listContainer}>
              <View style={Styles.listInnerWrap}>
                <View style={Styles.feedLeft}>
                  <Image source={Images.Image2} style={Styles.listIcon} />
                  <View style={Styles.seperate}>
                    <Text style={Styles.listUserTitle}>{"Profile"}</Text>
                    <Text style={Styles.listDescription}>{`Edit Profile`}</Text>
                  </View>
                </View>
                <Image source={Images.chevronRight} style={Styles.icon} />
              </View>
            </TouchableOpacity>

            {/* List Data */}
            <View style={Styles.listContainer}>
              {
                DATA?.map((item, keyID) => {
                  return (
                    <View key={keyID} style={Styles.settingWrapMain}>
                      <TouchableOpacity style={Styles.settingWrap}>
                        <Text style={Styles.listUserTitle}>{item?.title}</Text>
                        <Image source={Images.chevronRight} style={Styles.icon} />
                      </TouchableOpacity>
                      {DATA?.length - 1 == keyID ? null : <View style={Styles.line} />}
                    </View>
                  )
                })
              }
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate("Welcome") }}
              style={Styles.logoutButton}>
              <Text style={Styles.logoutTitle}>{`Sign Out`}</Text>
            </TouchableOpacity>


          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

export default Settings;
