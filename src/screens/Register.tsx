import {
  Box,
  Button,
  ButtonText,
  HStack,
  Image,
  Input,
  InputField,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {useEffect, useState} from 'react';
import {Colors, Icons} from '../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {TextFontFamily} from '../utils/units/Textfont';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import {useTranslations} from '../hooks';

const Register = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {strings} = useTranslations();
  const [firstName, setFirstName] = useState('Test');
  const [lastName, setLastname] = useState('Test');
  const [emailId, setEmailId] = useState('Test@gmail.com');
  const [referralCode, setReferralCode] = useState('SANF8V79');
  const [value, setValue] = useState(true);
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
    <Box flex={1}>
      <HStack alignItems="center" alignSelf="center">
        <Text fontSize={14} fontFamily={'Lexend_Regular'}>
          {route?.params?.number?.substring(0, 2) + 'XXXXXXXX'}
        </Text>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            fontSize={14}
            color={Colors.BLUE}
            ml={10}
            fontFamily={TextFontFamily.Lexend_Regular_Font}>
            CHANGE
          </Text>
        </Pressable>
      </HStack>

      <HStack ml={20} mr={20} mt={50} justifyContent="space-between">
        <Box w={'50%'}>
          <Input
            w={'90%'}
            variant="underlined"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}>
            <InputField
              value={firstName}
              onChangeText={(item: any) => {
                setFirstName(item);
              }}
              fontFamily={TextFontFamily.Lexend_Regular_Font}
              placeholderTextColor={Colors.PLACEHOLDER}
              placeholder="First Name"
            />
          </Input>
        </Box>
        <Box w={'5%'} />
        <Box w={'50%'}>
          <Input
            w={'90%'}
            variant="underlined"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}>
            <InputField
              onChangeText={(item: any) => {
                setLastname(item);
              }}
              value={lastName}
              fontFamily={TextFontFamily.Lexend_Regular_Font}
              placeholderTextColor={Colors.PLACEHOLDER}
              placeholder="Last Name"
            />
          </Input>
        </Box>
      </HStack>

      <Input
        ml={20}
        mr={20}
        mt={50}
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField
          placeholder="Email Id"
          value={emailId}
          onChangeText={(item: any) => {
            setEmailId(item);
          }}
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          placeholderTextColor={Colors.PLACEHOLDER}
        />
      </Input>

      <VStack ml={20} mr={20} mt={50}>
        <Text
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          color={Colors.PLACEHOLDER}>
          Referral Code (Optional)
        </Text>
        <Input
          mt={10}
          variant="underlined"
          size="lg"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            placeholder="Email Id"
            value={referralCode}
            onChangeText={(item: any) => {
              setReferralCode(item);
            }}
            fontFamily={TextFontFamily.Lexend_Regular_Font}
            fontSize={'$lg'}
            fontWeight="$medium"
          />
        </Input>
      </VStack>

      {!isKeyboardVisible && <HStack position="absolute" bottom={180} left={20}>
        <CheckBox
          disabled={false}
          value={value}
          onValueChange={newValue => setValue(newValue)}
        />
        <Text fontFamily={TextFontFamily.Lexend_Regular_Font} fontSize={'$sm'}>
          Allow to send updates on{' '}
          <Image source={Icons.WhatsAppIcon} w={25} h={25} alt="Whatsapp" />{' '}
          whatsapp
        </Text>
      </HStack>}

      {!isKeyboardVisible && <Text
        marginHorizontal={20}
        textAlign="center"
        fontSize={'$sm'}
        bottom={120}
        fontFamily={TextFontFamily.Lexend_Regular_Font}
        position="absolute">
        A one time password (OTP) will be sent to this number for verification
      </Text>}

      <Button
        size="md"
        w={'50%'}
        bg="green"
        position="absolute"
        bottom={50}
        alignSelf="center"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => {
          if (firstName === '') {
            Alert.alert(strings.app_name, 'Enter Your First Name');
          } else if (lastName === '') {
            Alert.alert(strings.app_name, 'Enter Your Last Name');
          } else if (emailId === '') {
            Alert.alert(strings.app_name, 'Enter Your Email Id');
          } else if (!value) {
            Alert.alert(strings.app_name, 'Please Click On Placeorder');
          } else {
            navigation.navigate('OTPVerify', {
              number: route?.params?.number,
            });
          }
        }}>
        <ButtonText
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          fontWeight="$medium">
          Register
        </ButtonText>
      </Button>
    </Box>
  );
};

export default Register;
