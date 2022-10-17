/* React Native */
import { Dimensions, Platform, StatusBar } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

const guidelineBaseWidth = 350;

const guidelineBaseHeight = 680;

const scale = (size: number): number => (screenWidth / guidelineBaseWidth) * size;

const verticalScale = (size: number): number => (screenHeight / guidelineBaseHeight) * size;

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

function scaleFS(fontSize: number, standardScreenHeight = 680) {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight || 0;

  const deviceHeight = isIphoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export { scale, verticalScale, scaleFS, screenHeight, screenWidth };
