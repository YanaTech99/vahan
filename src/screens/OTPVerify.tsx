import {
  Box,
  Button,
  ButtonText,
  HStack,
  Image,
  Input,
  InputField,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTranslations} from '../hooks';
import {Colors} from '../theme';
import {TextFontFamily} from '../utils/units/Textfont';
import {ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react';

const OTPVerify = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [otp, setOtp] = useState('123456');
  const {strings} = useTranslations();
  const [counter, setCounter] = useState(60); // Initial counter value in seconds
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const handleResendOTP = () => {
    setCounter(60);
    setTimerActive(true);
  };

  return (
    <Box flex={1}>
      <HStack alignItems="center" alignSelf="center">
        <Text fontSize={14} fontFamily={'Lexend_Regular'}>
          {route?.params?.number?.substring(0, 2) + 'XXXXXXXX'}
        </Text>
        <Pressable
          onPress={() => {
            navigation.pop(2);
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

      <Text
        fontSize={12}
        color={Colors.HEADING}
        alignSelf="center"
        ml={10}
        mt={20}
        fontFamily={TextFontFamily.Lexend_Regular_Font}>
        One Time Password (OTP) has been sent to this number
      </Text>

      <HStack alignSelf="center" mt={20}>
        <ActivityIndicator size={'large'} color={Colors.HEADING} />
        <Box w={20} />
        <Text>Waiting to auto verify OTP</Text>
      </HStack>

      <Input
        ml={20}
        mr={20}
        mt={50}
        variant="underlined"
        size="xl"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField
          placeholder="Enter OTP manually"
          value={otp}
          onChangeText={(item: any) => {
            setOtp(item);
          }}
          textAlign="center"
          fontSize={'$xl'}
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          placeholderTextColor={Colors.PLACEHOLDER}
        />
      </Input>

      <Button
        size="md"
        w={'90%'}
        bg={Colors.LIGHT_GRAY}
        rounded={30}
        h={50}
        mt={20}
        alignSelf="center"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => {
          navigation.navigate('Dashboard');
        }}>
        <ButtonText
          color={Colors.BLACK}
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          fontWeight="$medium">
          Verify
        </ButtonText>
      </Button>

      {counter > 0 ? (
        <Text
          fontSize={12}
          mt={20}
          color={Colors.HEADING}
          alignSelf="center"
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          Resend OTP in {counter} seconds
        </Text>
      ) : (
        <Pressable onPress={handleResendOTP}>
          <Text
            fontSize={12}
            mt={20}
            color={Colors.HEADING}
            alignSelf="center"
            fontFamily={TextFontFamily.Lexend_Regular_Font}>
            Resend OTP
          </Text>
        </Pressable>
      )}

      <Button
        size="md"
        w={'60%'}
        bg={Colors.LIGHT_GRAY}
        h={50}
        mt={20}
        alignSelf="center"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => {}}>
        <ButtonText
          color={Colors.PLACEHOLDER}
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          fontWeight="$medium">
          Get OTP Via WhatsApp
        </ButtonText>
      </Button>

      <Button
        size="md"
        w={'60%'}
        bg={Colors.LIGHT_GRAY}
        h={50}
        mt={20}
        alignSelf="center"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => {}}>
        <ButtonText
          color={Colors.PLACEHOLDER}
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          fontWeight="$medium">
          Resend OTP via SMS
        </ButtonText>
      </Button>
    </Box>
  );
};

export default OTPVerify;
