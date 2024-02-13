import {Box, HStack, Pressable, Text, VStack} from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../theme';
import {TextFontFamily} from '../../utils/units/Textfont';
import {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

interface Props {
  selected: number;
}

const BottomTab: FC<Props> = ({selected}) => {
  const navigation = useNavigation();
  return (
    <HStack
      justifyContent="space-between"
      left={20}
      right={20}
      position="absolute"
      bottom={20}>
      <Pressable
        alignItems="center"
        onPress={() => {
          navigation.navigate('Dashboard');
        }}>
        <Icon name="home" size={30} color="green" />
        <Text
          fontSize={'$sm'}
          color={selected === 1 ? Colors.BLUE : Colors.PRICING_TEXT_HEADING}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          Home
        </Text>
      </Pressable>

      <Pressable
        alignItems="center"
        onPress={() => {
          navigation.navigate('OrderPage');
        }}>
        <Icon name="list-alt" size={30} color="green" />
        <Text
          color={selected === 2 ? Colors.BLUE : Colors.PRICING_TEXT_HEADING}
          fontSize={'$sm'}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          Orders
        </Text>
      </Pressable>

      <Pressable
        alignItems="center"
        onPress={() => {
          navigation.navigate('Payment');
        }}>
        <MaterialIcons name="payment" size={30} color="green" />
        <Text
          fontSize={'$sm'}
          color={selected === 3 ? Colors.BLUE : Colors.PRICING_TEXT_HEADING}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          Payments
        </Text>
      </Pressable>

      <Pressable
        alignItems="center"
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Icon name="user-circle" size={30} color="green" />
        <Text
          fontSize={'$sm'}
          color={selected === 4 ? Colors.BLUE : Colors.PRICING_TEXT_HEADING}
          fontFamily={TextFontFamily.Lexend_Regular_Font}>
          Account
        </Text>
      </Pressable>
    </HStack>
  );
};

export default BottomTab;
