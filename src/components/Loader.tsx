import React from 'react';
import { ViewStyle, ActivityIndicator } from 'react-native';
import { HStack, Modal, ModalBackdrop } from '@gluestack-ui/themed';
import { Colors } from '../theme';

interface LoaderProps {
  style?: ViewStyle;
  isVisible?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  return (
    <Modal isOpen={isVisible}>
      <ModalBackdrop />
      <HStack space="sm" alignItems="center">
        <ActivityIndicator size={'large'} color={Colors.BG_LIGHTER} />
      </HStack>
    </Modal>
  );
};

export default Loader;
