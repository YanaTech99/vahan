import React, { FC } from "react";
import {
  Box,
  HStack,
  Heading,
  Image,
  Input,
  InputField,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Icons, screenWidth } from "../../theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { setFontSize } from "../../utils/units/utils";
import { TextFontFamily } from "../../utils/units/Textfont";
import { useTranslations } from "../../hooks";

type AddressComponentProps = {
  title: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  zipCode: string;
  isShow?: boolean;
  deletePress?: () => void;
};

const AddressComponent: FC<AddressComponentProps> = ({
  title,
  address_line_1,
  address_line_2,
  city,
  state,
  zipCode,
  isShow,
  deletePress,
}) => {
  const { strings } = useTranslations();
  return (
    <HStack alignItems="flex-start">
      <Box w={"5%"}>
        <Image source={Icons.locationIcon} alt="locationIcon" mt="$1" />
      </Box>

      <Box ml={10} w={"90%"}>
        <VStack>
          <Heading
            size="lg"
            fontFamily="$mPlusRoundedExtraBold"
            fontWeight="$medium"
            sx={{ _android: { fontWeight: "$normal" } }}
            letterSpacing={1}
          >
            {title}
          </Heading>
          <Text
            fontSize={setFontSize(14)}
            fontWeight="$medium"
            color="#7586A5"
            letterSpacing={1}
          >
            {`${address_line_1 || ""} ${address_line_1 ? "," : ""}`}
            {`${address_line_2 || ""} ${address_line_2 ? "," : ""}`}
            {`${city || ""} ${city ? "," : ""}`}
            {`${state || ""} ${state ? "," : ""}`}
            {`${zipCode || ""}`}
          </Text>
        </VStack>
      </Box>

      {isShow && (
        <Pressable w={"5%"} onPress={deletePress}>
          <Image source={Icons.deleteIcon} alt="deleteIcon" mt="$1" />
        </Pressable>
      )}
    </HStack>
  );
};

export default AddressComponent;
