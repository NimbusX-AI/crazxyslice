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
import Colors from '../../../Styles/Colors';

export type Props = {
  navigation: any;
};

const Home = (props: any) => {
  const { navigation } = props;
  const UsersData = [
    {
      id: "1",
      icon: Images.chatAvatar1,
      name: `Track your`
    },
    {
      id: "2",
      icon: Images.chatAvatar2,
      name: `Set your`
    },
    {
      id: "3",
      icon: Images.chatAvatar3,
      name: `Stay`
    },
    {
      id: "4",
      icon: Images.chatAvatar4,
      name: `Connect`
    },
    {
      id: "5",
      icon: Images.chatAvatar5,
      name: `Stay`
    },
    {
      id: "6",
      icon: Images.chatAvatar6,
      name: `Track your`
    },
    {
      id: "7",
      icon: Images.chatAvatar7,
      name: `Connect`
    },
  ]

  const NEWS_FEED = [
    {
      userInfo: {
        userPic: Images.chatAvatar1,
        name: `Discover new workouts`,
        headIcon: Images.search
      },
      feedImage: Images.feed1,
      feedTitle: `Get personalized training`,
      like: true,
      likeText: `Join fitness challenges`,
      leftIcon: Images.plus,
      leftText: `Stay accountable`
    },
    {
      userInfo: {
        userPic: Images.chatAvatar3,
        name: `Get expert advice`,
        headIcon: Images.comment
      },
      // feedImage: Images.feed1,
      feedTitle: `Stay connected`,
      like: false,
      likeText: `Get inspired`,
      leftIcon: Images.dots,
      leftText: `Share your`
    },
    {
      userInfo: {
        userPic: Images.chatAvatar6,
        name: `Discover new workouts`,
        headIcon: Images.dots
      },
      feedImage: Images.feed2,
      feedTitle: `Discover new exercises`,
      like: true,
      likeText: `Get support`,
      leftIcon: Images.comment,
      leftText: `Join the fitness`
    },
  ]

  return (

    <SafeAreaView style={Styles.backgroundWrapper}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>
            {/* Header */}
            <View style={Styles.headerContainer}>
              <View style={Styles.empty} />
              <Text style={Styles.headerTitle}>{`Accountable`}</Text>
              <TouchableOpacity onPress={() => { navigation.navigate("Notification") }}>
                <Image source={Images.user} style={Styles.headerIcon} />
              </TouchableOpacity>
            </View>
            {/* User Reel List */}
            <FlatList
              data={UsersData}
              keyExtractor={(item, index) => index.toString()}
              style={Styles.flexDirection}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
              horizontal={true}
              renderItem={({ item, index }) => (
                <TouchableOpacity key={index}
                  // onPress={() => {
                  //   navigation.navigate("ProductDetail", {
                  //     product: item
                  //   })
                  // }}
                  style={Styles.onlineWrapper}>
                  <View style={Styles.onlineInner}>
                    <Image source={item?.icon} style={Styles.userIcon} />
                  </View>
                  <Text style={Styles.title}>{item?.name}</Text>
                </TouchableOpacity>
              )} />


            {/* Feed List */}
            {
              NEWS_FEED?.map((item, keyID) => {
                return (
                  <View key={keyID} style={Styles.feedContainer}>
                    <View style={Styles.feedInner}>
                      {/* userInfo  */}
                      <View style={Styles.feedHeader}>
                        <View style={Styles.feedLeft}>
                          <Image source={item?.userInfo?.userPic} style={Styles.listIcon} />
                          <Text style={Styles.listUserTitle}>{item?.userInfo?.name}</Text>
                        </View>
                        <Image source={item?.userInfo?.headIcon} style={Styles.rightIcon} />
                      </View>
                      {/* main */}
                      {
                        item?.feedImage &&
                        <Image source={item?.feedImage} style={Styles.centerPicIcon} />
                      }
                      <Text style={Styles.listTitle}>{item?.feedTitle}</Text>

                      <View style={Styles.feedBottom}>
                        <View style={Styles.feedLeft}>
                          <Image source={item?.leftIcon} style={Styles.bottomIcon} />
                          <Text style={Styles.leftTitle}>{item?.leftText}</Text>
                        </View>
                        <View style={Styles.feedLeft}>
                          <Text style={Styles.rightTitle}>{item?.likeText}</Text>
                          <Image source={Images.heart} style={[Styles.heartIcon,
                          { tintColor: item?.like == true ? Colors.MediumBlack : Colors.Silver }]} />
                        </View>
                      </View>
                    </View>
                  </View>

                )
              })
            }


          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

export default Home;


