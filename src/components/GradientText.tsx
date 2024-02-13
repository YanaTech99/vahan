import React, {FC, ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {useColorMode} from '@gluestack-style/react';
import {Colors} from '../theme';

const darkGradient = ['#F2EE6A', '#7E7C2C', '#CCAB2E'];

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={props.gradientColor ? props.gradientColor : darkGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text {...props} style={[props.style, {opacity: 0,textAlign:'center'}]} />
      </LinearGradient>
    </MaskedView>
  );
};
export default GradientText;
