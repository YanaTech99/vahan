import React, {FC} from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  Text,
  HStack,
  VStack,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';

import {TextFontFamily} from '../utils/units/Textfont';
import {useNavigation} from '@react-navigation/native';

interface Props {
  isOpen?: boolean;
  onClose(): void;
  onDeleteClick(): void;
}

const BottomSheetImagePickerexport: FC<Props> = ({
  isOpen,
  onClose,
  onDeleteClick,
}) => {
  const navigation = useNavigation();
  return (
    <Actionsheet
      snapPoints={[30]}
      isOpen={isOpen}
      onClose={onClose}
      zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator w={34} bg="#E5E5E5" />
        </ActionsheetDragIndicatorWrapper>
        <VStack w={'$full'}>
          <Text fontFamily={TextFontFamily.Lexend_Bold_Font} mt={50} ml={20}>
            Sure you want to logout?
          </Text>
          <HStack mt={50} ml={20} mr={20} justifyContent="space-between">
            <Button
              size="md"
              w={'40%'}
              bg="green"
              alignSelf="center"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              onPress={onClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>

            <Button
              size="md"
              w={'40%'}
              bg="green"
              alignSelf="center"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              onPress={() => {
                onClose();
                navigation.navigate('Login');
              }}>
              <ButtonText>Logout</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
};
export default BottomSheetImagePickerexport;
