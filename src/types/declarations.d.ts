declare module '*.png';

declare module 'react-native-virtual-keyboard';
//declare module 'rn-flipper-async-storage-advanced';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
