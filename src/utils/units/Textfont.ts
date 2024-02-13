import {Platform} from 'react-native';

export class TextFontFamily {
  public static readonly Lexend_Medium_Font =
    Platform.OS === 'android' ? 'Lexend_Medium' : 'Lexend_Medium';
  public static readonly Lexend_Black_Font =
    Platform.OS === 'android' ? 'Lexend_Black' : 'Lexend_Black';
  public static readonly Lexend_Bold_Font =
    Platform.OS === 'android' ? 'Lexend_Bold' : 'Lexend_Bold';
  public static readonly Lexend_ExtraBold_Font =
    Platform.OS === 'android' ? 'Lexend_ExtraBold' : 'Lexend_ExtraBold';
  public static readonly Lexend_ExtraLight_Font =
    Platform.OS === 'android' ? 'Lexend_ExtraLight' : 'Lexend_ExtraLight';
  public static readonly Lexend_Light_Font =
    Platform.OS === 'android' ? 'Lexend_Light' : 'Lexend_Light';
  public static readonly Lexend_Regular_Font =
    Platform.OS === 'android' ? 'Lexend_Regular' : 'Lexend_Regular';
  public static readonly Lexend_SemiBold_Font =
    Platform.OS === 'android' ? 'Lexend_SemiBold' : 'Lexend_SemiBold';
  public static readonly Lexend_Thin_Font =
    Platform.OS === 'android' ? 'Lexend_Thin' : 'Lexend_Thin';
}
