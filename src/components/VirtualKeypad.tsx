import React from 'react';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import {Colors, Icons} from '../theme';
import {keypadStyles} from '../theme';

type VirtualKeypadProps = {
  maxLength?: number;
  onChange: (value: string) => void;
  onClear: () => void;
};

const DEFAULT_CODE_LENGTH = 4;

const VirtualKeypad = (
  props: VirtualKeypadProps,
  ref: typeof VirtualKeyboard,
) => {
  const {onChange, onClear, maxLength = DEFAULT_CODE_LENGTH} = props;

  return (
    <VirtualKeyboard
      ref={ref}
      color={Colors.BLACK}
      pressMode="string"
      decimal={false}
      clearOnLongPress
      maxLength={maxLength}
      onPress={onChange}
      onClear={onClear}
      pressableStyle={keypadStyles.keypadPressableStyle}
      pressedStyle={keypadStyles.keypadPressedStyle}
      rowStyle={keypadStyles.keypadRowStyle}
      cellStyle={keypadStyles.cellStyle}
      style={keypadStyles.keypadStyle}
      backspaceImg={Icons.backspaceIcon}
    />
  );
};

export default React.forwardRef(VirtualKeypad);
