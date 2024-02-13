import {StyleSheet} from 'react-native';
import {screenWidth} from './dimensions';
import Colors from './colors';
import {TextFontFamily} from '../utils/units/Textfont';
import {setFontSize} from '../utils/units/utils';

export const headerStyles = StyleSheet.create({
  headerTitleStyle: {
    fontFamily: TextFontFamily.ROUND_MPLUS_MEDIUM,
    fontWeight: '800',
    fontSize: setFontSize(20),
    color: Colors.HEADING,
  },
});

export const keypadStyles = StyleSheet.create({
  keypadStyle: {
    marginLeft: 0,
    marginRight: 0,
    width: screenWidth,
    alignSelf: 'center',
  },
  keypadRowStyle: {
    marginTop: 0,
    marginBottom: '1%',
  },
  keypadPressableStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keypadPressedStyle: {
    backgroundColor: Colors.LIGHT_GRAY,
  },
  cellStyle: {
    alignItems: 'center',
  },
});
