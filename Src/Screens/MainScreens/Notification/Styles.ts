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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp(1.5)
  },
  empty: {
    width: hp(1.5)
  },
  headerTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    color: Colors.MediumBlack,
  },
  icon: {
    color: Colors.MediumBlack,
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
    marginTop: hp(1.5),
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
    width: hp(2.8),
    height: hp(2.8),
    borderRadius: hp(2.8),
    marginRight: hp(1)
  },
  listUserTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: hp(1.2),
    color: Colors.MediumBlack,
  },
  listDescription: {
    fontFamily: "Roboto-Regular",
    fontSize: hp(1.2),
    color: Colors.MediumBlack,
  },
  acceptButton: {
    width: hp(8.5),
    alignSelf: "center",
    backgroundColor: Colors.SkyBlue,
    height: hp(3),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.SkyBlue,
  },
  acceptText: {
    fontFamily: "Roboto-Medium",
    fontSize: hp(1.1),
    color: Colors.White,
  },
  postIcon: {
    width: hp(4),
    height: hp(4),
    borderRadius: hp(4),
  }
});
export default styles;