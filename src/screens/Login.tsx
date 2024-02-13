import {
  Box,
  Button,
  ButtonText,
  FlatList,
  HStack,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {useEffect, useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Colors, Icons} from '../theme';
import {TextFontFamily} from '../utils/units/Textfont';
import {useTranslations} from '../hooks';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('9876543210');
  const {strings} = useTranslations();
  const navigation = useNavigation();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
      <HStack>
        <Box w={'50%'}>
          <Image
            h={'$48'}
            source={Icons.LogoIcon}
            alt="Logo"
            resizeMode="cover"
          />
        </Box>
        <Box w={'50%'} pr={10} alignItems="center" justifyContent="center">
          <Text
            textAlign="center"
            fontWeight="$extrabold"
            fontFamily={TextFontFamily.Lexend_ExtraBold_Font}
            fontSize={'$md'}>
            Get Your Packages delivered safely to you
          </Text>
        </Box>
      </HStack>

      {!isKeyboardVisible && (
        <Image
          source={Icons.LoginIcon}
          h={'40%'}
          resizeMode="contain"
          alt="login"
        />
      )}

      <Box ml={20} mr={20}>
        <Text
          fontWeight="$extrabold"
          fontSize={18}
          fontFamily={TextFontFamily.Lexend_ExtraBold_Font}>
          Welcome 👋
        </Text>
        <Text
          fontWeight="$normal"
          fontSize={12}
          mt={20}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          With a vaild number,you can access deliveries,and our other Services
        </Text>
      </Box>

      <HStack m={20}>
        <Box
          borderColor="grey"
          borderWidth={StyleSheet.hairlineWidth}
          alignSelf="center"
          w={'$24'}
          paddingHorizontal={10}
          paddingVertical={8}>
          <HStack alignSelf="center" alignItems="center">
            <Image
              w={25}
              h={25}
              source={Icons.IndiaFlagIcon}
              alt="India Flag"
            />
            <Text
              ml={5}
              mr={10}
              fontFamily={TextFontFamily.Lexend_Regular_Font}>
              +91
            </Text>
            <Image
              source={Icons.DropDownIcon}
              alt="Drop Down"
              tintColor={Colors.BLACK}
            />
          </HStack>
        </Box>

        <Box w={10} />

        <Box
          borderColor="grey"
          borderWidth={StyleSheet.hairlineWidth}
          alignSelf="center"
          w={'$64'}
          paddingHorizontal={10}>
          <TextInput
            style={{
              height: 40,
              width: '100%',
              fontFamily: TextFontFamily.Lexend_Regular_Font,
              color: Colors.BLACK,
            }}
            //readOnly={true}
            onChangeText={(item: any) => {
              setMobileNumber(item);
            }}
            value={mobileNumber}
            placeholder="Mobile Number"
            keyboardType="numeric"
          />
        </Box>
      </HStack>

      <Button
        size="md"
        w={'50%'}
        bg="green"
        alignSelf="center"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => {
          if (mobileNumber.length < 10) {
            Alert.alert(strings.app_name, 'Please enter vaild mobile number');
          } else {
            navigation.navigate('Register', {number: mobileNumber});
          }
        }}>
        <ButtonText>Proceed</ButtonText>
      </Button>
    </KeyboardAvoidingView>
  );
};

export default Login;
