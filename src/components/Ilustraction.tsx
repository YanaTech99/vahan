import {Box, Image, Text} from '@gluestack-ui/themed';
import {Colors} from '../theme';
import {FC} from 'react';
import {TextFontFamily} from '../utils/units/Textfont';

interface Props {
  icon?: string;
  showIcon: boolean;
  title?: String;
  showTitle: boolean;
  mr?: any;
}

export const IlustractionBox: FC<Props> = ({
  icon,
  showIcon,
  title,
  showTitle,
  mr,
}) => {
  if (showTitle) {
    return (
      <Box
        w={150}
        h={60}
        alignSelf="flex-end"
        mr={10}
        borderRadius={20}
        borderColor={Colors.ILUSTRATION_BACKGROUND_COLOR}
        borderWidth={1}
        mb={10}
        justifyContent="center"
        alignItems="center">
        <Text
          fontFamily={TextFontFamily.ROUND_MPLUS_EXTRA_BOLD}
          fontWeight="$extrabold"
          color={Colors.BLACK}>
          {'ilustration'}
        </Text>
      </Box>
    );
  } else if (showIcon) {
    return (
      <Box mb={10} alignSelf="flex-end" mr={mr}>
        <Image source={icon} alt="Illustraction" />
      </Box>
    );
  }
};
