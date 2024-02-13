import { Dimensions, Platform, StatusBar,PixelRatio } from 'react-native';

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
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

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export const getDeviceHeightInPercentage = (percentage: number) => {
  const screenHeight = Dimensions.get('window').height;
  const heightInPixels = (percentage/ 100) * screenHeight;
  return heightInPixels;
};

export const getDeviceWidthInPercentage = (percentage: number) => {
  const screenWidth = Dimensions.get('window').width;
  const widthInPixels = (percentage / 100) * screenWidth;
  return widthInPixels;
};

export const calculateHeightByResolution = (desiredHeight: number) => {
  const screenHeight = Dimensions.get('window').height;
  const scale = screenHeight / 812; // Assuming base resolution of iPhone 6 (667 is the height of iPhone 6)

  const heightInPixels = PixelRatio.roundToNearestPixel(desiredHeight * scale);
  return heightInPixels;
};