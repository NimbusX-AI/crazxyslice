import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';

import Images from '../Styles/Images';
import Colors from '../Styles/Colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Home from "../Screens/MainScreens/Home";
import Search from "../Screens/MainScreens/Search";
import Profile from "../Screens/MainScreens/Profile";
import Messages from "../Screens/MainScreens/Messages";
import Create from "../Screens/MainScreens/Create";

import Notification from "../Screens/MainScreens/Notification";
import Settings from '../Screens/MainScreens/Settings';

const widthScreen = Dimensions.get('window').width;


type BottomStackParamList = {
  HomeTab: undefined,
  SearchTab: undefined,
  ProfileTab: undefined,
  MessagesTab: undefined,
  CreateTab: undefined,
};
type HomeStackParamList = {
  Home: undefined,
  Notification: undefined,
};
type SearchStackParamList = {
  Search: undefined,
};
type ProfileStackParamList = {
  Profile: undefined,
  Settings: undefined,
};
type MessagesStackParamList = {
  Messages: undefined,
};
// type CreateStackParamList = {
//   Create: undefined,
// };



const navigationRef = React.createRef<any>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator<BottomStackParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const SearchStack = createStackNavigator<SearchStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();
const MessagesStack = createStackNavigator<MessagesStackParamList>();
// const CreateStack = createStackNavigator<CreateStackParamList>();




export const HomeStacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Notification" component={Notification} />

    </HomeStack.Navigator>
  );
}

export const SearchStacks = () => {
  return (
    <SearchStack.Navigator initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="Search" component={Search} />

    </SearchStack.Navigator>
  );
}

const ProfileStacks = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Settings" component={Settings} />
      
    </ProfileStack.Navigator>
  )
}

const MessagesStacks = () => {
  return (
    <MessagesStack.Navigator initialRouteName="Messages"
      screenOptions={{
        headerShown: false,
      }}>
      <MessagesStack.Screen name="Messages" component={Messages} />

    </MessagesStack.Navigator>
  )
}

// const CreateStacks = () => {
//   return (
//     <CreateStack.Navigator initialRouteName="Create"
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <CreateStack.Screen name="Create" component={Create} />

//     </CreateStack.Navigator>
//   )
// }





export const BottomTabView = (props: any) => {
  // let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  let unreadChatCount = 1
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image;
          if (route.name === 'HomeTab') {
            image = Images.home;
          }
          else if (route.name === 'SearchTab') {
            image = Images.search;
          }
          else if (route.name === 'CreateTab') {
            image = Images.plus;
          }
          else if (route.name === 'MessagesTab') {
            image = Images.comment;
          }
          else if (route.name === 'ProfileTab') {
            image = Images.user;
          }

          return (
            <>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                {
                  route.name === 'CreateTab' ?
                    <View style={{
                      marginTop: hp(-1),
                      borderRadius: 56,
                      backgroundColor: Colors.White,
                      width: 56,
                      height: 56,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.22,
                      shadowRadius: 2.22,
                      elevation: 3,
                      alignItems: 'center', justifyContent: 'center',
                      zIndex: 10
                    }}>
                      <Image source={image} style={{
                        width: 24,
                        height: 18,
                      }} />
                    </View>
                    :
                    <Image source={image} style={{
                      marginTop: hp(1),
                      width: route.name === 'SearchTab' ? 23 : route.name === 'HomeTab' ? 24 : route.name === 'ProfileTab' ? 22 : 22,
                      height: route.name === 'SearchTab' ? 18 : route.name === 'HomeTab' ? 18 : route.name === 'ProfileTab' ? 18 : 18,
                    }} />
                }

              </View>
            </>
          );
        },
        tabBarStyle: {
          height: hp(10),
          backgroundColor: Colors.White,
          // overflow: 'hidden',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
          // borderTopColor: Colors.MediumGrey,
        },
        tabBarShowLabel: false,
      })}>

      <Tab.Screen name="HomeTab" component={HomeStacks} />
      <Tab.Screen name="SearchTab" component={SearchStacks} />
      <Tab.Screen name="CreateTab" component={Create}
        options={{
          tabBarStyle: { display: "none" },
        }} />

      <Tab.Screen name="MessagesTab" component={MessagesStacks} />
      <Tab.Screen name="ProfileTab" component={ProfileStacks} />

    </Tab.Navigator>
  );
}

export default BottomTabView;