import React, {FC} from 'react';
import Svg, {Defs, Rect, Text} from 'react-native-svg';
import {
  DangerGradient,
  PrimaryGradient,
  SecondaryGradient,
  TertiaryGradient,
} from './Gradient';
import {screenWidth} from '../theme/dimensions';
import { TextFontFamily } from '../utils/units/Textfont';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';

type Props = {
  variant: ButtonVariant;
  title: string;
  onPress?: () => void;
};

const buttonConfig = {
  primary: {
    fill: 'url(#primary_linear_gradient)',
    textColor: 'rgb(0, 0, 0)',
  },
  secondary: {
    fill: 'url(#secondary_linear_gradient)',
    textColor: 'black',
  },
  tertiary: {
    fill: 'none',
    textColor: 'url(#tertiary_linear_gradient)',
  },
  danger: {
    fill: 'url(#danger_linear_gradient)',
    textColor: 'black',
  },
};

const SvButton: FC<Props> = ({variant, title, onPress}) => {
  const config = buttonConfig[variant];
  return (
    <Svg
      width={screenWidth * 0.8}
      height="50"
      viewBox="0 0 300 50"
      fill="none"
      onPress={onPress}>
      <Defs>
        <PrimaryGradient />
        <SecondaryGradient />
        <TertiaryGradient />
        <DangerGradient />
      </Defs>
      <Rect width="300" height="50" rx="25" fill={config.fill} />
      <Text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        fill={config.textColor}
        fontSize={18}
        fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
        fontWeight={900}
        lengthAdjust="spacing">
        {title}
      </Text>
    </Svg>
  );
};

export default SvButton;
