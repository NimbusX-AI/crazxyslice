import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

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
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    color: Colors.MediumBlack,
    marginTop: hp(1.5),
  },
  logoText: {
    fontSize: 32,
    fontFamily: "Roboto-Medium",
    color: Colors.MediumBlack,
    marginTop: hp(5),
  },
  logoIcon: {
    width: widthScreen / 1.12,
    height: hp(32),
    alignSelf: "center",
  },
  headerContainer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomContainer: {
    flex: 0.4,
    justifyContent: "flex-end",
    alignItems: "center"
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
  registerButton: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    backgroundColor: Colors.White,
    height: hp(6),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(3),
    marginTop: hp(3),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  registerTitle: {
    fontFamily: "Roboto-Black",
    fontSize: 14,
    color: Colors.Grey,
  }

});
export default styles;