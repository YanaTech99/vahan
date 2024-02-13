import {
  Box,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import BottomTab from '../components/bottom_tab/BottomTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Icons} from '../theme';
import {TextFontFamily} from '../utils/units/Textfont';
import {Share} from 'react-native';
import BottomSheetImagePickerexport from '../components/BottomSheetImagePicker';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const navigation = useNavigation();

  const closeBottomSheet = () => {
    setOpenBottomSheet(!openBottomSheet);
  };

  return (
    <Box flex={1} bg="#F0F3F7">
      <Box bg="$white">
        <HStack justifyContent="space-between" ml={20} mr={20} mt={20}>
          <VStack>
            <Text fontSize={12} fontFamily={TextFontFamily.Lexend_Regular_Font}>
              Sandeep Kumar
            </Text>
            <Text fontSize={10} fontFamily={TextFontFamily.Lexend_Regular_Font}>
              abcdummy@gmail.com
            </Text>
          </VStack>
          <Text
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            fontSize={12}
            color={Colors.BLUE}
            fontFamily={TextFontFamily.Lexend_Bold_Font}>
            Edit Profile
          </Text>
        </HStack>
        <HStack alignItems="center" mt={10} ml={20} mr={20} mb={20}>
          <Text
            mr={10}
            fontSize={12}
            color={Colors.REQUIRED_TEXT_COLOR}
            fontFamily={TextFontFamily.Lexend_Bold_Font}>
            Verify Email ID
          </Text>
          <Ionicons
            name="arrow-forward-sharp"
            size={20}
            color={Colors.REQUIRED_TEXT_COLOR}
          />
        </HStack>
      </Box>

      <Text
        mt={20}
        mb={10}
        ml={20}
        mr={20}
        fontSize={14}
        fontFamily={TextFontFamily.Lexend_Regular_Font}
        color={Colors.PRICING_TEXT_HEADING}>
        Benefits
      </Text>

      <Pressable
        onPress={async () => {
          await Share.share({message: 'Share and Earn Upto 200'});
        }}>
        <HStack
          ml={20}
          mr={20}
          borderBottomWidth={2}
          borderRightWidth={2}
          borderColor={Colors.BORDER_TOP_COLOR}
          borderLeftWidth={2}
          alignItems="center"
          bg="$white"
          rounded={10}
          justifyContent="space-between"
          borderTopWidth={1}>
          <Box
            justifyContent="center"
            bg={Colors.ICON_BG_COLOR}
            w={50}
            h={50}
            mt={10}
            ml={10}
            mb={10}
            borderRadius={25}
            alignItems="center">
            <Ionicons name="gift-outline" size={25} color={Colors.ICON_COLOR} />
          </Box>
          <Text
            ml={10}
            fontFamily={TextFontFamily.Lexend_Bold_Font}
            fontSize={12}>{`Refer and earn \u20B9 200`}</Text>
          <HStack
            bg={Colors.ICON_BG_COLOR}
            pl={8}
            pr={8}
            pt={5}
            pb={5}
            rounded={10}
            alignItems="center">
            <Ionicons name="share-social" size={20} color={Colors.ICON_COLOR} />
            <Text
              ml={10}
              fontFamily={TextFontFamily.Lexend_Bold_Font}
              fontSize={12}>
              Invite
            </Text>
          </HStack>
          <Box mr={10}>
            <Ionicons name="chevron-forward" size={15} color={Colors.BLACK} />
          </Box>
        </HStack>
      </Pressable>

      <Text
        mt={20}
        mb={10}
        ml={20}
        mr={20}
        fontSize={14}
        fontFamily={TextFontFamily.Lexend_Regular_Font}
        color={Colors.PRICING_TEXT_HEADING}>
        Support & Legal
      </Text>

      <Box bg={Colors.WHITE} ml={20} mr={20} rounded={10}>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center">
            <Box
              justifyContent="center"
              bg={Colors.ICON_BG_COLOR}
              w={50}
              h={50}
              mt={10}
              ml={10}
              mb={10}
              borderRadius={25}
              alignItems="center">
              <Ionicons
                name="gift-outline"
                size={25}
                color={Colors.ICON_COLOR}
              />
            </Box>
            <Text
              ml={10}
              fontFamily={TextFontFamily.Lexend_Bold_Font}
              fontSize={12}>
              Contact Support
            </Text>
          </HStack>
          <Box mr={10}>
            <Ionicons name="chevron-forward" size={15} color={Colors.BLACK} />
          </Box>
        </HStack>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center">
            <Box
              justifyContent="center"
              bg={Colors.ICON_BG_COLOR}
              w={50}
              h={50}
              mt={10}
              ml={10}
              mb={10}
              borderRadius={25}
              alignItems="center">
              <Ionicons
                name="gift-outline"
                size={25}
                color={Colors.ICON_COLOR}
              />
            </Box>
            <Text
              ml={10}
              fontFamily={TextFontFamily.Lexend_Bold_Font}
              fontSize={12}>
              Terms and Condition
            </Text>
          </HStack>
          <Box mr={10}>
            <Ionicons name="chevron-forward" size={15} color={Colors.BLACK} />
          </Box>
        </HStack>
      </Box>

      <Text
        mt={20}
        mb={10}
        ml={20}
        mr={20}
        fontSize={14}
        fontFamily={TextFontFamily.Lexend_Regular_Font}
        color={Colors.PRICING_TEXT_HEADING}>
        Settings
      </Text>

      <Pressable
        onPress={() => {
          setOpenBottomSheet(!openBottomSheet);
        }}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          ml={20}
          bg="$white"
          rounded={10}
          mr={20}>
          <HStack alignItems="center">
            <Box
              justifyContent="center"
              bg={Colors.ICON_BG_COLOR}
              w={50}
              h={50}
              mt={10}
              ml={10}
              mb={10}
              borderRadius={25}
              alignItems="center">
              <Ionicons
                name="gift-outline"
                size={25}
                color={Colors.ICON_COLOR}
              />
            </Box>
            <Text
              ml={10}
              fontFamily={TextFontFamily.Lexend_Bold_Font}
              fontSize={12}>
              Logout
            </Text>
          </HStack>
          <Box mr={10}>
            <Ionicons name="chevron-forward" size={15} color={Colors.BLACK} />
          </Box>
        </HStack>
      </Pressable>

      <Text
        alignSelf="center"
        mt={50}
        fontSize={12}
        fontFamily={TextFontFamily.Lexend_Regular_Font}
        color={Colors.PRICING_TEXT_HEADING}>
        App Version 1.0.0
      </Text>

      <BottomSheetImagePickerexport
        isOpen={openBottomSheet}
        onClose={closeBottomSheet}
        onDeleteClick={() => {}}
      />

      <BottomTab selected={4} />
    </Box>
  );
};

export default Profile;
