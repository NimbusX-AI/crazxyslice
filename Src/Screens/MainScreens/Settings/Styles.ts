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
  scrollContainer: {
    marginTop: hp(1.5),
    marginBottom: hp("10%")
  },
  headerContainer: {
    marginTop: hp(2.5),
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginBottom: hp(1.5)
  },
  empty: {
    width: hp(1.5)
  },
  headerTitle: {
    fontFamily: "Roboto-Black",
    fontSize: 32,
    color: Colors.MediumBlack,
  },
  icon: {
    width: 20,
    height: 20
  },

  headerListContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",

  },
  listHeadTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 12,
    color: Colors.MediumBlack,
    marginBottom: hp(1)
  },
  listContainer: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: "center",
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  listInnerWrap: {
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    width: '90%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  feedLeft: {
    flexDirection: 'row',
    alignItems: "center"
  },
  listIcon: {
    width: 56,
    height: 56,
    borderRadius: 56,
  },
  seperate: {
    marginLeft: hp(1.5)
  },
  listUserTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 14,
    color: Colors.MediumBlack,
  },
  listDescription: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: Colors.MediumBlack,
    marginTop: hp(0.4)
  },
  settingWrapMain:{
    width: '100%',
    alignSelf: "center",
  },
  settingWrap: {
    width: '88%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(3),
    marginBottom: hp(3),
  },
  line: {
    width: '100%',
    alignSelf: "center",
    height: hp(0.2),
    backgroundColor: Colors.WhiteGrey
  },
  logoutButton: {
    marginTop: hp(4),
    width: widthScreen / 1.12,
    alignSelf: "center",
    backgroundColor: Colors.White,
    height: hp(6),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoutTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: Colors.Grey,
  },

});
export default styles;