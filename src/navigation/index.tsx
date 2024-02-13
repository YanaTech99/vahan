import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './NavigationService';
import {useTranslations} from '../hooks';
import {Colors, headerStyles} from '../theme';
import Login from '../screens/Login';
import Register from '../screens/Register';
import OTPVerify from '../screens/OTPVerify';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import {Text} from '@gluestack-ui/themed';
import {TextFontFamily} from '../utils/units/Textfont';
import Payment from '../screens/Payment';
import OrderPage from '../screens/OrderPage';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator<RootStackParamList>();

// const isLoggedIn = true;

const defaultScreenOptions = {
  headerShadowVisible: false,
};

const AuthNavigator = ({navigation}) => {
  return (
    <AuthStack.Navigator
      //initialRouteName="Dashboard"
      screenOptions={{
        ...defaultScreenOptions,
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: headerStyles.headerTitleStyle,
      }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          title: '',
        }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{
          headerBackVisible: false,
          title: '',
        }}
      />
      <AuthStack.Screen
        name="OTPVerify"
        component={OTPVerify}
        options={{
          headerBackVisible: false,
          title: '',
        }}
      />
      <AuthStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          headerBackVisible: false,
          title: '',
        }}
      />
      <AuthStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          headerBackVisible: false,
          title: '',
        }}
      />

      <AuthStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: '',
          headerRight: () => (
            <Text
              onPress={() => {
                navigation.goBack();
              }}
              fontFamily={TextFontFamily.Lexend_Bold_Font}>
              Save
            </Text>
          ),
        }}
      />

      <AuthStack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
          headerBackVisible: false,
          title: '',
        }}
      />

      <AuthStack.Screen
        name="OrderPage"
        component={OrderPage}
        options={{
          headerShown: false,
          headerBackVisible: false,
          title: '',
        }}
      />
    </AuthStack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        ...DefaultTheme,
        colors: {...DefaultTheme.colors, background: Colors.WHITE},
      }}>
      <RootStack.Navigator
        screenOptions={{
          ...defaultScreenOptions,
          headerShown: false,
        }}>
        <RootStack.Screen name="LoginStack" component={AuthNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
