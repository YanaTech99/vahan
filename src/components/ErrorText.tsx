import React from 'react';
import {Text} from '@gluestack-ui/themed';
import {useTranslations} from '../hooks';
import {TextFontFamily} from '../utils/units/Textfont';

type Props = {
  message: string;
};

const ErrorText: React.FC<Props & any> = ({message, ...rest}) => {
  const {strings} = useTranslations();

  return (
    <Text
      fontFamily={TextFontFamily.ROUND_MPLUS_BOLD}
      fontWeight="$bold"
      color="$errorText"
      numberOfLines={2}
      ellipsizeMode="tail"
      px="$2"
      mt="$10"
      {...rest}>
      {message ?? strings.something_went_wrong}
    </Text>
  );
};

export default ErrorText;
