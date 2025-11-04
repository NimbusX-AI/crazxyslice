import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';


export type Props = {
  navigation: any;
};

const SignUp = (props: any) => {
  const { navigation } = props;

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    navigation.navigate("BottomTabView", {
      screen: "HomeTab"
    })
  }

  const goToSignUp = () => {
    navigation.navigate("")
  }

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'dark-content'} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
        enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        contentContainerStyle={Styles.safeAreaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.backgroundWrapper}>

            <View style={Styles.mainHeadContainer}>
              <Image source={Images.authLogo} style={Styles.logoIcon} />
            </View>

            <View style={Styles.midCenterData}>
              <Text style={Styles.welcomeText}>{`Accountable`}</Text>
              <Text style={Styles.loginHead}>{`Create an account to get started`}</Text>

            </View>

            <View style={Styles.textInputContainer}>

              {/* Email */}
              <View style={Styles.inputHeader}>
                <Text style={Styles.inputHeaderText}>{`Email *`}</Text>
              </View>
              <View style={Styles.wrapper}>
                <TextInput style={Styles.textInput}
                  value={email}
                  placeholder={"Enter your email"}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.MediumGrey}
                  onChangeText={(value) => {
                    setEmail(value)
                  }} />
                <Ionic
                  name={"mail"}
                  size={18}
                  style={Styles.icon} />
              </View>

              {/* Password */}
              <View style={Styles.inputHeader}>
                <Text style={Styles.inputHeaderText}>{`Password *`}</Text>
              </View>
              <View style={Styles.wrapper}>
                <TextInput style={Styles.textInput}
                  value={password}
                  placeholder={" Enter your password"}
                  placeholderTextColor={Colors.MediumGrey}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={(value) => {
                    setPassword(value)
                  }} />
                <Ionic
                  name={"lock-closed"}
                  size={18}
                  style={Styles.icon} />
              </View>
            </View>


            <View style={Styles.bottomContainer}>

              <TouchableOpacity onPress={() => { onSubmit() }}
                style={Styles.sendButton}>
                <Text style={Styles.sendTitle}>{`Sign up`}</Text>
              </TouchableOpacity>

              <View style={Styles.signUpWrapper}>
                <Text style={Styles.dontHaveText}>{`Already have an account?`}</Text>
                <TouchableOpacity onPress={goToSignUp}>
                  <Text style={Styles.signUpText}>{`Log in`}</Text>
                </TouchableOpacity>
              </View>


            </View>
          </View>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView >
  );
}

export default SignUp;
