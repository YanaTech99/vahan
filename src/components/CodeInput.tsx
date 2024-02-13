import React, {FC} from 'react';
import {HStack, Text, Box} from '@gluestack-ui/themed';
import {DimensionValue} from 'react-native';
import {Colors} from '../theme';
import { TextFontFamily } from '../utils/units/Textfont';

const DEFAULT_LENGTH = 6;
const defaultPin = Array(DEFAULT_LENGTH).fill('');

type PinEllipseProps = {
  bgColor?: string;
  size?: DimensionValue;
  spacing?: DimensionValue;
};

type CodeInputProps = {
  pin?: string;
  pinLength?: number;
  color?: string;
  isSecured?: boolean;
  renderCodeInput?: () => JSX.Element;
};

const PinEllipse: FC<PinEllipseProps> = ({bgColor, spacing}) => {
  return <Box bg={bgColor} w="$4.5" h="$4.5" rounded={10} mx={spacing} />;
};

const CodeInput: FC<CodeInputProps> = ({
  pin,
  pinLength,
  color,
  isSecured,
  renderCodeInput,
}) => {
  const pinStr = pin
    ? pin.split('').concat(defaultPin)
    : Array(pinLength).fill('');
  pinStr.length = pinLength || DEFAULT_LENGTH;

  const renderDot = (digit: string) => (
    <PinEllipse bgColor={isSecured && digit ? '#101324' : Colors.LIGHT_GRAY} />
  );

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      alignSelf="center"
      minHeight={30}>
      {pinStr.map((digit, index) => (
        <Box
          key={index}
          w={32}
          mx="$1"
          alignItems="center"
          justifyContent="center">
          {!isSecured && digit ? (
            <Text
              fontSize="$2xl"
              fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
              fontWeight="$medium"
              lineHeight="$xl"
              color={color || Colors.LIGHT_GRAY}>
              {digit}
            </Text>
          ) : renderCodeInput ? (
            digit ? (
              renderCodeInput()
            ) : (
              renderDot(digit)
            )
          ) : (
            renderDot(digit)
          )}
        </Box>
      ))}
    </HStack>
  );
};

export default CodeInput;
