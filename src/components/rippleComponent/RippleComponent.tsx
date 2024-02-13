import React, { Children, FC } from "react";
import { ViewStyle } from "react-native";
import Ripple from "react-native-material-ripple";

export type RippleComponentProps = {
  style?: ViewStyle;
  onPress?: () => void;
  children?: any;
};

const RippleComponent: FC<RippleComponentProps> = ({
  style,
  onPress,
  children,
}) => {
  return (
    <Ripple style={style} onPress={onPress}>
      {children}
    </Ripple>
  );
};

export default RippleComponent;
