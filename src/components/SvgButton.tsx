import React, {FC, useEffect} from 'react';
import Svg, {Defs, Rect, SvgProps, Text} from 'react-native-svg';
import {
  DangerGradient,
  PrimaryGradient,
  PrimaryGradientLight,
  SecondaryGradient,
  TertiaryGradient,
} from './Gradient';
import {ConsoleLogger} from '../services/logger.service';
import {TextFontFamily} from '../utils/units/Textfont';

type ButtonVariant =
  | 'primary'
  | 'primaryLight'
  | 'secondary'
  | 'tertiary'
  | 'danger';

type Props = {
  variant: ButtonVariant;
  title: string;
  onPress?: () => void;
  disabled?: boolean;
} & SvgProps;

const buttonConfig = {
  primary: {
    fill: 'url(#primary_linear_gradient)',
    textColor: 'rgb(0, 0, 0)',
  },
  primaryLight: {
    fill: 'url(#primary_light_linear_gradient)',
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

const SvgButton: FC<Props> = ({
  variant,
  title,
  onPress,
  disabled,
  ...props
}) => {
  const config = buttonConfig[variant];

  const [isPressed, setIsPressed] = React.useState(false);

  const handlePressState = () => {
    onPress && setIsPressed(prev => !prev);
  };

  return (
    <Svg
      width="300"
      height="50"
      viewBox="0 0 300 50"
      fill="none"
      onPress={disabled ? undefined : onPress}
      onPressIn={handlePressState}
      onPressOut={handlePressState}
      {...props}>
      <Defs>
        <PrimaryGradient />
        <SecondaryGradient />
        <TertiaryGradient />
        <DangerGradient />
        <PrimaryGradientLight />
      </Defs>
      <Rect
        width="300"
        height="50"
        rx="25"
        fill={config.fill}
        opacity={disabled ? 0.8 : 1}
      />
      <Text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        fill={config.textColor}
        fontSize={18}
        fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
        fontWeight={500}
        lengthAdjust="spacing"
        opacity={disabled ? 0.8 : 1}>
        {title}
      </Text>
    </Svg>
  );
};

export default SvgButton;
