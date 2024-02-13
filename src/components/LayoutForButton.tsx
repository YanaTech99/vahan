import {
  Box,
  HStack,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  ScrollView,
} from '@gluestack-ui/themed';
import {FC, useEffect, useState} from 'react';
import {
  NativeModules,
  Platform,
  PressableStateCallbackType,
  StatusBar,
  Keyboard,
} from 'react-native';
import {Colors, Icons} from '../theme';
import {ConsoleLogger} from '../services/logger.service';
import {TextFontFamily} from '../utils/units/Textfont';

interface Props {
  children: JSX.Element | JSX.Element[];
  onPress?: () => void;
  scrollable?: boolean;
  type?: String;
  disable?: boolean;
  icon?: string;
  title?: String;
  visibleIcon?: boolean;
  isShowCount?: boolean;
  count?: number;
  totalCount?: number;
}

const LayoutForButton: FC<Props> = ({
  children,
  onPress,
  scrollable,
  disable,
  icon,
  title,
  visibleIcon,
  isShowCount,
  count,
  totalCount,
}) => {
  ConsoleLogger.log('visibleIcon--->', visibleIcon);
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [isKeyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const {StatusBarManager} = NativeModules;

  useEffect(() => {
    if (Platform.OS == 'ios') {
      StatusBarManager.getHeight(value => {
        if (visibleIcon) {
          const height = value.height + 30;
          setStatusBarHeight(height);
        } else {
          setStatusBarHeight(value.height);
        }
      });
    } else if (Platform.OS === 'android') {

      setStatusBarHeight(StatusBar.currentHeight);
    }
    if (Platform.OS === 'ios') {
      Keyboard.addListener('keyboardDidShow', onKeyboardShow);
      Keyboard.addListener('keyboardDidHide', onKeyboardHide);
    }
  }, []);

  const onKeyboardShow = () => {
    setKeyboardOpen(true);
  };

  const onKeyboardHide = () => {
    setKeyboardOpen(false);
  };
  return (
    <Box height={'$full'}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={statusBarHeight + 10}
        flex={1}
        behavior={Platform.select({ios: 'padding'})}>
        <ScrollView
          scrollEnabled={scrollable}
          keyboardShouldPersistTaps={'handled'}>
          {children}
        </ScrollView>
        <HStack justifyContent={isShowCount ? 'space-between' : 'flex-end'}>
          {isShowCount && (
            <HStack
              position={isKeyboardOpen ? 'relative' : 'absolute'}
              bottom={isKeyboardOpen ? 10 : 45}
              left={20}
              mt={20}
              mb={Platform.OS === 'ios' ? 30 : 0}>
              <Text
                fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
                fontWeight="$medium"
                color={Colors.ERROR}>
                {count}
              </Text>
              <Text
                fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
                fontWeight="$medium"
                color={Colors.ERROR}>
                {' / '}
              </Text>
              <Text
                color={Colors.HEADING}
                fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
                fontWeight="$medium">
                {totalCount}
              </Text>
            </HStack>
          )}
          <Pressable
            onPress={disable ? undefined : onPress}
            position={isKeyboardOpen ? 'relative' : 'absolute'}
            bottom={20}
            right={20}
            mb={Platform.OS === 'ios' ? 30 : 0}
            alignSelf="flex-end"
            sx={{':disabled': {opacity: 0.2}}}>
            {({pressed}: PressableStateCallbackType) => (
              <HStack alignItems="center" gap={20} opacity={pressed ? 0.8 : 1}>
                {title && (
                  <Text
                    fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
                    fontWeight="$medium"
                    opacity={disable ? 0.3 : 1}
                    color={Colors.HEADING}>
                    {title}
                  </Text>
                )}
                <Image
                  source={icon ? icon : Icons.forwardArrowIcon}
                  w={60}
                  h={60}
                  opacity={disable ? 0.3 : 1}
                  backgroundColor="transparent"
                  alt="sendIcon"
                />
              </HStack>
            )}
          </Pressable>
        </HStack>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default LayoutForButton;
