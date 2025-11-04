import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
  safeAreaContainer: {
    // flex: 1
    flexGrow: 1,
    backgroundColor: Colors.White
  },
  mainContainer: {
    flex: 1,
  },
  backgroundWrapper: {
    flex: 1,
  },
  mainHeadContainer: {
    flex: 0.25,
    width: widthScreen / 1.2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  midCenterData: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoIcon: {
    width: 213,
    height: 206,
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 34,
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
    color: Colors.MediumBlack,
    marginBottom: hp(0.5)
  },
  loginHead: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    textAlign: 'center',
    color: Colors.MediumBlack,
    marginTop: hp(2)
  },
  textInputContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: 'center'
  },

  inputHeader: {
    marginTop: hp(3),
    marginBottom: hp(1),
    width: widthScreen / 1.25,
    alignSelf: 'center',
  },
  inputHeaderText: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    color: Colors.MediumBlack,
  },
  wrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor:Colors.White,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  textInput: {
    flex: 1,
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    color: Colors.MediumGrey,
    marginLeft: hp(2),
  },
  userEmailAndroid: {
    flex: 1,
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    color: Colors.MediumGrey,
    marginLeft: hp(2),
    includeFontPadding: false,
  },
  icon: {
    color: Colors.MediumBlack,
    marginRight: hp(2),
  },
  signUpWrapper: {
    marginTop: hp(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dontHaveText: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: Colors.MediumBlack,
    marginRight: 2
  },
  signUpText: {
    fontFamily: "Roboto-Black",
    fontSize: 14,
    color: Colors.MediumBlack,
    marginLeft: 2
  },
  sendButton: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    backgroundColor: Colors.SkyBlue,
    height: hp(6),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.SkyBlue,
  },
  sendTitle: {
    fontFamily: "Roboto-Black",
    fontSize: 14,
    color: Colors.White,
  },

});
export default styles;