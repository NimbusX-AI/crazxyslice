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

const Notification = (props: any) => {
  const { navigation } = props;

  const DATA = [
    {
      title: "Today",
      notifyData: [
        {
          pic: Images.heart,
          username: "Account",
          description: `sent you a workout`,
          postPic: Images.chatAvatar1,
          friendRequest: false
        },
        {
          pic: Images.chatAvatar2,
          username: "Account",
          description: `added you as a workout buddy`,
          postPic: Images.chatAvatar4,
          friendRequest: true
        },

      ]
    },
    {
      title: "This Week",
      notifyData: [
        {
          pic: Images.comment,
          username: "Account",
          description: `commented on your workout progress`,
          postPic: Images.chatAvatar5,
          friendRequest: false
        },
        {
          pic: Images.share,
          username: "Account",
          description: `shared your workout`,
          postPic: Images.chatAvatar7,
          friendRequest: false
        },
      ]
    },
    {
      title: "Earlier",
      notifyData: [
        {
          pic: Images.heart,
          username: "Account",
          description: `and 12 others liked your workout photo`,
          postPic: Images.chatAvatar6,
          friendRequest: false
        },
        {
          pic: Images.comment,
          username: "Account",
          description: `commented on your workout progress`,
          postPic: Images.chatAvatar5,
          friendRequest: false
        },
        {
          pic: Images.share,
          username: "Account",
          description: `shared your workout`,
          postPic: Images.chatAvatar3,
          friendRequest: false
        },
        {
          pic: Images.heart,
          username: "Account",
          description: `and 12 others liked your workout photo`,
          postPic: Images.chatAvatar6,
          friendRequest: false
        },
        {
          pic: Images.comment,
          username: "Account",
          description: `commented on your workout progress`,
          postPic: Images.chatAvatar5,
          friendRequest: false
        },
        {
          pic: Images.share,
          username: "Account",
          description: `shared your workout`,
          postPic: Images.chatAvatar3,
          friendRequest: false
        },
      ]
    }
  ]

  return (

    <SafeAreaView style={Styles.backgroundWrapper}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Ionic name={"arrow-back"} size={20} style={Styles.icon} />
          </TouchableOpacity>
          <Text style={Styles.headerTitle}>{`Notifications`}</Text>
          <Ionic name={"options"} size={20} style={Styles.icon} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContainer}>

            {
              DATA?.map((item, keyID) => {
                return (
                  <View key={keyID} style={Styles.headerListContainer}>
                    <Text style={Styles.listHeadTitle}>{item?.title}</Text>
                    {
                      item?.notifyData.map((val, keyVal) => {
                        return (
                          <TouchableOpacity key={keyVal} style={Styles.listContainer}>
                            <View style={Styles.listInnerWrap}>
                              <View style={Styles.feedLeft}>
                                <Image source={val?.pic} style={Styles.listIcon} />
                                <Text style={Styles.listUserTitle}>
                                  <Text style={Styles.listUserTitle}>{val?.username}</Text>
                                  <Text>{'     '}</Text>
                                  <Text style={Styles.listDescription}>{val?.description}</Text>
                                </Text>
                              </View>
                              {
                                val?.friendRequest == true ?
                                  <TouchableOpacity style={Styles.acceptButton}>
                                    <Text style={Styles.acceptText}>{`Accept`}</Text>
                                  </TouchableOpacity>
                                  :
                                  <Image source={val?.postPic} style={Styles.postIcon} />
                              }
                            </View>
                          </TouchableOpacity>
                        )
                      })
                    }

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

export default Notification;
