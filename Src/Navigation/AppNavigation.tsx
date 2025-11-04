
import React from 'react';
import { Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';
import Metrics from '../Styles/Metrices';

import BottomTabView from './BottomNavigation';
import Splash from '../Screens/Splash';
import Welcome from '../Screens/Welcome';
import SignUp from '../Screens/Authentication/SignUp';

const widthScreen = Dimensions.get('window').width;

type RootStackParamList = {
  Splash: undefined,
  Welcome: undefined,
  SignUp: undefined,
  BottomTabView: undefined,
  // Menu: undefined,
};



enableScreens();


const RootStack = createStackNavigator<RootStackParamList>();


export const THEME_COLOR = '#0AAF60';

export const setNavigator = (nav: any) => {
  const navigator = nav;
};

export default function RootNavigator() {
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'extend',
              }),
            },
          }),
          presentation: "modal"
        }}>
        <RootStack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <RootStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
        <RootStack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />

        <RootStack.Screen name='BottomTabView' component={BottomTabView} options={{ headerShown: false }} />

        {/*    */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

