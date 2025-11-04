import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: Colors.White
  },
  mainContainer: {
    flex: 1,
  },
  headerPic: {
    width: widthScreen,
    alignSelf: "center",
    height: hp(18)
  },
  userPic: {
    width: hp(10.4),
    height: hp(10.4),
    borderRadius: hp(10.4),
    marginTop: hp(-5.2),
    zIndex: 10,
    alignSelf: "center",
  },
  headerTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    color: Colors.MediumBlack,
    marginTop: hp(2),
    textAlign: "center"
  },
  usernameTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: Colors.GraniteGrey,
    marginTop: hp(0.7),
    textAlign: "center",
    marginBottom: hp(1.5)
  },
  scrollContainer: {
    marginTop: hp(1),
    marginBottom: hp("10%")
  },
  accountInfoWrap: {
    marginTop: hp(1),
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  infoWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  infoNumber: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    color: Colors.VampireBlack,
  },
  infoTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: Colors.GraniteGrey,
    marginTop: hp(1),
  },
  sendButton: {
    marginTop: hp(3),
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
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: Colors.White,
  },
  mainFlat: {
    width: widthScreen / 1.17,
    alignSelf: 'center',
    marginTop: hp(3),
    // marginBottom: hp("16%"),
  },
  viewFlat: {
    marginTop: hp(0.5),
    marginBottom: hp(0.5),
    width: widthScreen / 3.6,
    // alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  flatIcon: {
    width: hp(12),
    height: hp(12),
    resizeMode: "contain",
    borderRadius: 24
  },

});
export default styles;