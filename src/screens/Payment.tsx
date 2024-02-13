import {Box, HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import BottomTab from '../components/bottom_tab/BottomTab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, Icons} from '../theme';
import {TextFontFamily} from '../utils/units/Textfont';

const Payment = () => {
  return (
    <Box flex={1}>
      <HStack alignItems="center" mt={30} ml={20} mr={20}>
        <MaterialIcons name="location-on" size={30} color={'green'} />
        <VStack ml={20}>
          <Text fontFamily={TextFontFamily.Lexend_Medium_Font}>
            Pick Up From
          </Text>
          <HStack alignItems="center" justifyContent="space-between" w={'100%'}>
            <Box w={'85%'}>
              <Text
                color={Colors.PRICING_TEXT_HEADING}
                fontFamily={TextFontFamily.Lexend_Regular_Font}
                fontSize={13}>
                J29F+5G5,Gurudwara Rd,Har Nagar,Sec...
              </Text>
            </Box>
            <Box w={'15%'}>
              <Image
                source={Icons.DropDownIcon}
                tintColor={Colors.BLACK}
                alt="drop"
              />
            </Box>
          </HStack>
        </VStack>
      </HStack>

      <Image source={Icons.FasterDeliveryIcon} alt="banner" h={150} mt={20} />

      <Box m={20}>
        <Text
          color={Colors.DATE_TIME}
          fontSize={12}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          Trip to
        </Text>
        <Text
          color={Colors.HEADING}
          fontSize={14}
          mt={5}
          mb={5}
          fontFamily={TextFontFamily.Lexend_Bold_Font}>
          Hari vihar dwarka New Delhi 110078
        </Text>
        <Text
          color={Colors.DATE_TIME}
          fontSize={12}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          5 Nov 2023, 01:21 PM
        </Text>
      </Box>

      <Box h={1} w={'$full'} mb={8} bg={Colors.TEXT_INPUT_BORDER_COLOR} />

      <HStack justifyContent="space-between" ml={20} mr={20}>
        <HStack>
          <Text
            color={Colors.HEADING}
            fontSize={12}
            fontFamily={TextFontFamily.Lexend_Regular_Font}>
            Amount Payable:
          </Text>
          <Text
            color={Colors.BLACK_TWO}
            fontSize={12}
            fontFamily={TextFontFamily.Lexend_ExtraBold_Font}>{` Rs.114`}</Text>
        </HStack>
        <Text
          color={Colors.BLUE}
          fontSize={10}
          fontFamily={TextFontFamily.Lexend_ExtraBold_Font}>
          VIEW BILL DETAILS
        </Text>
      </HStack>

      <Box h={1} w={'$full'} mt={8} bg={Colors.TEXT_INPUT_BORDER_COLOR} />

      <HStack ml={20} mr={20} mt={20}>
        <MaterialIcons name="check-circle-outline" color={'green'} size={25} />
        <VStack ml={10}>
          <Text fontFamily={TextFontFamily.Lexend_Regular_Font}>
            Amount Paid
          </Text>
          <Text fontFamily={TextFontFamily.Lexend_Bold_Font}>Rs. 114</Text>
        </VStack>
      </HStack>

      <HStack ml={20} mr={20} mt={40}>
        <MaterialIcons name="radio-button-unchecked" color={Colors.DATE_TIME} size={25} />
        <VStack ml={10}>
          <HStack>
            <Text fontFamily={TextFontFamily.Lexend_Regular_Font}>
              How was your driver,{' '}
            </Text>
            <Text fontFamily={TextFontFamily.Lexend_Bold_Font}>Raj Kumar?</Text>
          </HStack>
          <HStack>
            <MaterialIcons
              name="star-rate"
              size={25}
              color={Colors.TEXT_INPUT_BORDER_COLOR}
            />
            <MaterialIcons
              name="star-rate"
              size={25}
              color={Colors.TEXT_INPUT_BORDER_COLOR}
            />
            <MaterialIcons
              name="star-rate"
              size={25}
              color={Colors.TEXT_INPUT_BORDER_COLOR}
            />
            <MaterialIcons
              name="star-rate"
              size={25}
              color={Colors.TEXT_INPUT_BORDER_COLOR}
            />
            <MaterialIcons
              name="star-rate"
              size={25}
              color={Colors.TEXT_INPUT_BORDER_COLOR}
            />
          </HStack>
        </VStack>
      </HStack>

      <BottomTab selected={3} />
    </Box>
  );
};

export default Payment;
