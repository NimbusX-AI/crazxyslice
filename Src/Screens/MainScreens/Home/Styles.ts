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
    marginTop: hp(1),
    marginBottom: hp("10%")
  },
  headerContainer: {
    marginTop: hp(1.5),
    width: widthScreen / 1.12,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  empty: {
    width: hp(1.5)
  },
  headerTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    color: Colors.MediumBlack,
  },
  headerIcon: {
    width: 18,
    height: 18,
  },
  flexDirection: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(3.5),
    marginBottom: hp(1.5),
  },
  onlineWrapper: {
    marginRight: hp(2.2),
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: hp(5),
    height: hp(5),
    borderRadius: hp(5)
  },
  onlineInner: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(6),
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: Colors.MediumBlack,
    marginTop: hp(1.2)
  },
  feedContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2.5),
    backgroundColor: Colors.White,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  feedInner: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: "90%",
    alignSelf: 'center',
  },
  feedHeader: {
    width: "100%",
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  feedLeft: {
    flexDirection: 'row',
    alignItems: "center"
  },
  listIcon: {
    width: hp(3.2),
    height: hp(3.2),
    borderRadius: hp(3.2)
  },
  listUserTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 12,
    color: Colors.MediumBlack,
    marginLeft: hp(1)
  },

  rightIcon: {
    width: 14,
    height: 14,
    tintColor: Colors.DarkGrey
  },
  centerPicIcon: {
    width: "100%",
    height: hp(35),
    // resizeMode: "contain",
    borderRadius: 24,
    marginTop: hp(2),
  },
  listTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: Colors.MediumBlack,
    marginTop: hp(2),
  },
  feedBottom: {
    marginTop: hp(3),
    width: "100%",
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: Colors.DarkGrey,
    marginLeft: hp(0.7)
  },
  rightTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: Colors.DarkGrey,
    marginRight: hp(0.7)
  },
  bottomIcon: {
    width: 18,
    height: 18
  },
  heartIcon:{
    width: 24,
    height: 24
  }
});
export default styles;