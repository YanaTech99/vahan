import {Box, HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import BottomTab from '../components/bottom_tab/BottomTab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, Icons} from '../theme';
import {TextFontFamily} from '../utils/units/Textfont';

const Dashboard = () => {
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

      <Image source={Icons.BannerImage} alt="banner" h={150} mt={20} />

      <Box bg={Colors.TEXT_INPUT_BORDER_COLOR}>
        <Text
          fontSize={'$sm'}
          ml={20}
          mt={20}
          color={Colors.PRICING_TEXT_HEADING}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          Please select type of vehicle
        </Text>

        <HStack mb={20} ml={10} mr={10} justifyContent="space-between" mt={20}>
          <Box
            w={'32%'}
            borderColor={Colors.DATE_TIME}
            bg={Colors.WHITE}
            alignItems="center"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
            borderBottomWidth={2}
            borderRadius={10}>
            <Image
              source={Icons.TwoWheelerIcon}
              h={50}
              w={50}
              alt="First"
              mt={20}
            />
            <Text
              fontSize={10}
              fontWeight="$bold"
              fontFamily={TextFontFamily.Lexend_Medium_Font}>
              2 Wheeler
            </Text>
            <Text
              mb={10}
              fontSize={8}
              fontFamily={TextFontFamily.Lexend_Regular_Font}>
              For smaller goods
            </Text>
          </Box>

          <Box
            w={'32%'}
            borderColor={Colors.DATE_TIME}
            bg={Colors.WHITE}
            alignItems="center"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
            borderBottomWidth={2}
            justifyContent="center"
            borderRadius={10}>
            <Image
              source={Icons.ThreeWheelerIcon}
              h={50}
              w={50}
              alt="First"
              mt={20}
            />
            <Text
              fontSize={10}
              fontWeight="$bold"
              fontFamily={TextFontFamily.Lexend_Regular_Font}>
              3 Wheeler
            </Text>
            <Text
              mb={10}
              fontSize={8}
              fontFamily={TextFontFamily.Lexend_Regular_Font}>
              For smaller goods
            </Text>
          </Box>

          <Box
            w={'32%'}
            borderColor={Colors.DATE_TIME}
            bg={Colors.WHITE}
            alignItems="center"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
            borderBottomWidth={2}
            justifyContent="center"
            borderRadius={10}>
            <Image
              source={Icons.SmallVansIcons}
              h={50}
              w={50}
              alt="First"
              mt={20}
            />
            <Text
              fontSize={10}
              fontWeight="$bold"
              fontFamily={TextFontFamily.Lexend_Regular_Font}>
              Small Vans
            </Text>
            <Text
              mb={10}
              fontSize={8}
              fontFamily={TextFontFamily.Lexend_Regular_Font}>
              Choose from our fleet
            </Text>
          </Box>
        </HStack>
      </Box>

      <HStack justifyContent="space-between">
        <Box w={'50%'}>
          <Image
            source={Icons.RealTimeTrackingLeftIcon}
            resizeMode="center"
            h={150}
            alt="Real Time Left"
          />
        </Box>
        <Box w={'50%'}>
          <Image
            source={Icons.RealTimeTrackingRightIcon}
            h={150}
            alt="Real Time Left"
          />
        </Box>
      </HStack>
      <BottomTab selected={1} />
    </Box>
  );
};

export default Dashboard;
