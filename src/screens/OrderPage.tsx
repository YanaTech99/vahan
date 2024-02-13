import {
  Box,
  HStack,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import BottomTab from '../components/bottom_tab/BottomTab';
import {Colors} from '../theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {TextFontFamily} from '../utils/units/Textfont';
import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

const OrderPage = () => {
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
    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardWillShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );

    const keyboardDidChangeFrame = Keyboard.addListener(
      'keyboardDidChangeFrame',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );
    const keyboardWillChangeFrame = Keyboard.addListener(
      'keyboardWillChangeFrame',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
      keyboardWillHideListener.remove();
      keyboardWillShowListener.remove();
      keyboardDidChangeFrame.remove();
      keyboardWillChangeFrame.remove();
    };
  }, []);

  return (
    <Box flex={1} bg={Colors.TEXT_INPUT_BORDER_COLOR}>
      <VStack
        bg={Colors.WHITE}
        borderBottomRightRadius={20}
        borderBottomLeftRadius={20}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          mt={80}
          mr={10}>
          <Box ml={10}>
            <Octicons
              name="dot-fill"
              color={Colors.GREEN_AMOUNT_COLOR}
              size={25}
            />
          </Box>

          <HStack
            rounded={10}
            p={8}
            borderColor={Colors.DATE_TIME}
            borderWidth={1}
            mr={10}
            alignItems="center"
            justifyContent="space-between">
            <VStack h={50} ml={10}>
              <Text>
                <Text
                  fontSize={16}
                  fontFamily={TextFontFamily.Lexend_Bold_Font}>
                  Sandeep Tiwari.{' '}
                </Text>
                <Text
                  fontSize={14}
                  color={Colors.DATE_TIME}
                  fontFamily={TextFontFamily.Lexend_Regular_Font}>
                  8178337101
                </Text>
              </Text>
              <Text>
                <Text
                  fontSize={13}
                  fontFamily={TextFontFamily.Lexend_Regular_Font}>
                  J29F+5G5, Gurudwara Rd, Har Nagar,...
                </Text>
              </Text>
            </VStack>
            <Box ml={20} mr={10}>
              <Ionicons name="chevron-forward" size={15} color={Colors.BLACK} />
            </Box>
          </HStack>
        </HStack>

        <HStack
          alignItems="center"
          justifyContent="space-between"
          mt={20}
          mr={10}>
          <Box ml={10}>
            <FontAwesome6
              name="location-pin"
              color={Colors.REQUIRED_TEXT_COLOR}
              size={20}
            />
          </Box>

          <HStack
            rounded={10}
            p={8}
            ml={20}
            borderColor={Colors.DATE_TIME}
            borderWidth={1}
            mr={10}
            alignItems="center"
            justifyContent="space-between">
            <Input w={'$80'} size='lg' variant="ghost" ml={10}>
              <InputField
                onChangeText={() => {
                  setKeyboardVisible(false);
                }}
                placeholder="Where is your Drop?"
              />
              <InputSlot pl="$3" pr={'$3'}>
                <FontAwesome name="microphone" size={25} color={'#285EE6'} />
              </InputSlot>
            </Input>
          </HStack>
        </HStack>

        <HStack mt={30} mb={20} alignSelf="center" alignItems="center">
          <MaterialIcons color={'#285EE6'} name="add-circle" size={20} />
          <Text ml={5} fontFamily={TextFontFamily.Lexend_Bold_Font}>
            ADD STOP
          </Text>
        </HStack>
      </VStack>

      <VStack>
        <Text
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          bg={Colors.WHITE}
          p={20}
          mt={20}
          ml={10}
          mr={10}>
          Recent Drops
        </Text>

        <HStack
          ml={10}
          mr={10}
          bg={Colors.WHITE}
          alignItems="center"
          pb={10}
          pl={10}
          pr={10}>
          <Box w={'10%'}>
            <MaterialIcons name="access-time" size={25} />
          </Box>

          <Box w={'75%'}>
            <VStack>
              <Text
                fontFamily={TextFontFamily.Lexend_Regular_Font}
                fontSize={12}>
                Hari Vihar dwarka New Delhi 110078
              </Text>
              <Text
                fontFamily={TextFontFamily.Lexend_Regular_Font}
                fontSize={10}>
                Gurudwara Road,Hari Vihar,Sector 16A, Dawrka,....
              </Text>
            </VStack>
          </Box>

          <Box w={'15%'} alignSelf="flex-end">
            <VStack alignItems="flex-end">
              <FontAwesome name="heart-o" size={20} />
              <Text fontFamily={TextFontFamily.Lexend_Regular_Font} size="xs">
                Save
              </Text>
            </VStack>
          </Box>
        </HStack>
      </VStack>

      <Box position="absolute" w={'$full'} bottom={120} bg={Colors.LIGHT_GRAY}>
        <HStack
          justifyContent="space-between"
          ml={10}
          mr={10}
          bg={Colors.WHITE}
          alignItems="center">
          <Box mt={10} mb={10} pl={10}>
            <HStack alignItems="center">
              <MaterialIcons color={'#2F5CE3'} name="my-location" size={25} />
              <Text
                fontSize={12}
                ml={5}
                fontFamily={TextFontFamily.Lexend_Regular_Font}>
                Locate on the Map
              </Text>
            </HStack>
          </Box>

          <Box mt={10} mb={10} pr={10}>
            <HStack alignItems="center">
              <MaterialIcons name="location-on" color={'#2F5CE3'} size={25} />
              <Text
                fontSize={12}
                ml={5}
                fontFamily={TextFontFamily.Lexend_Regular_Font}>
                Use Current location
              </Text>
            </HStack>
          </Box>
        </HStack>
      </Box>

      {!isKeyboardVisible && (
        <Box
          position="absolute"
          h={1}
          w={'$full'}
          bg={Colors.LIGHT_GRAY}
          bottom={100}
        />
      )}
      {!isKeyboardVisible && <BottomTab selected={2} />}
    </Box>
  );
};

export default OrderPage;
