import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../Styles/Images';

export type Props = {
  navigation: any;
};

const Profile = (props: any) => {
  const { navigation } = props;

  const DATA = [
    {
      id: "1",
      pic: Images.chatAvatar4
    },
    {
      id: "2",
      pic: Images.Image3
    },
    {
      id: "3",
      pic: Images.Image4
    },
    {
      id: "4",
      pic: Images.Image5
    },
    {
      id: "5",
      pic: Images.Image6
    },
    {
      id: "6",
      pic: Images.Image7
    },
    {
      id: "7",
      pic: Images.chatAvatar4
    },
    {
      id: "8",
      pic: Images.Image3
    },
    {
      id: "9",
      pic: Images.Image4
    },
    {
      id: "10",
      pic: Images.Image5
    },
    {
      id: "11",
      pic: Images.Image6
    },
    {
      id: "12",
      pic: Images.Image7
    },
  ]
  return (

    <SafeAreaView style={Styles.backgroundWrapper} edges={{ top: 'off' }}>
      <StatusBar barStyle={"light-content"} />
      <View style={Styles.mainContainer}>
        <Image source={Images.background} style={Styles.headerPic} />
        <Image source={Images.Image2} style={Styles.userPic} />
        <Text style={Styles.headerTitle}>{`Your Name`}</Text>
        <Text style={Styles.usernameTitle}>{`@yourusername`}</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>

            <View style={Styles.accountInfoWrap}>
              <View style={Styles.infoWrapper}>
                <Text style={Styles.infoNumber}>{`0`}</Text>
                <Text style={Styles.infoTitle}>{`Followers`}</Text>
              </View>
              <View style={Styles.infoWrapper}>
                <Text style={Styles.infoNumber}>{`0`}</Text>
                <Text style={Styles.infoTitle}>{`Following`}</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate("Settings") }}
              style={Styles.sendButton}>
              <Text style={Styles.sendTitle}>{`Connect`}</Text>
            </TouchableOpacity>

            <View style={Styles.mainFlat}>
              <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                // style={Styles.mainFlat}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                numColumns={3}
                renderItem={({ item, index }) => (
                  <TouchableOpacity key={index}
                    // onPress={() => {
                    //   navigation.navigate("ProductDetail", {
                    //     product: item
                    //   })
                    // }}
                    style={Styles.viewFlat}>
                    <Image source={item?.pic} style={Styles.flatIcon} />

                  </TouchableOpacity>
                )}
              />
            </View>

          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

export default Profile;


