import {
  Box,
  HStack,
  Image,
  Input,
  InputField,
  Text,
} from '@gluestack-ui/themed';
import {Colors, Icons} from '../theme';
import {TextFontFamily} from '../utils/units/Textfont';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const [name, setName] = useState('Sandeep Kumar');
  const [mobileNumber, setMobileNumber] = useState('9000000000');
  const [email, setEmail] = useState('abcd@gmail.com');

  return (
    <Box flex={1} bg={Colors.PRICING_SEPARATE_LINE}>
      <Text
        mt={20}
        ml={20}
        fontSize={14}
        color={Colors.PRICING_TEXT_HEADING}
        fontFamily={TextFontFamily.Lexend_Regular_Font}>
        Mobile number
      </Text>

      <HStack mt={10} ml={20}>
        <Text
          fontSize={14}
          color={Colors.PRICING_TEXT_HEADING}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          {mobileNumber.substring(0, 2) + 'XXXXXXXX'}
        </Text>
        <Text
          ml={20}
          fontSize={10}
          color={Colors.PLACEHOLDER}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          Cannot be changed
        </Text>
      </HStack>

      <Box bg="$white" rounded={5} ml={20} mr={20} mt={20}>
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
            value={name}
            onChangeText={(item: any) => {
              setName(item);
            }}
            fontFamily={TextFontFamily.Lexend_Regular_Font}
            placeholderTextColor={Colors.PLACEHOLDER}
          />
        </Input>

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
            value={mobileNumber.substring(0, 2) + 'XXXXXXXX'}
            fontFamily={TextFontFamily.Lexend_Regular_Font}
            placeholderTextColor={Colors.PLACEHOLDER}
          />
        </Input>

        <Input
          ml={20}
          mr={20}
          mt={50}
          variant="underlined"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={true}>
          <InputField
            placeholder="Email Id"
            value={email}
            onChangeText={(item: any) => {
              setEmail(item);
            }}
            fontFamily={TextFontFamily.Lexend_Regular_Font}
            placeholderTextColor={Colors.PLACEHOLDER}
          />
        </Input>

        <Text
          fontWeight="$normal"
          fontFamily={TextFontFamily.Lexend_Regular_Font}
          mt={20}
          ml={20}>
          GST Details
        </Text>

        <HStack
          justifyContent="space-between"
          mt={20}
          alignItems="center"
          mr={20}
          mb={20}>
          <Text
            fontWeight="$normal"
            fontSize={14}
            fontFamily={TextFontFamily.Lexend_Bold_Font}
            ml={20}>
            Not Available
          </Text>
          <Image
            source={Icons.DropDownIcon}
            tintColor={Colors.BLACK}
            alt="DropDown"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default EditProfile;
