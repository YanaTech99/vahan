import React from 'react';
import {Box, Text} from '@gluestack-ui/themed';
import {TextFontFamily} from '../utils/units/Textfont';

type FilterBadgeProps = {
  label: string;
  isSelected?: boolean;
};

export const FilterBadge: React.FC<FilterBadgeProps> = ({
  label,
  isSelected,
}) => (
  <Box
    bg={isSelected ? '#EEEEEE' : '#FAFAFA'}
    px="$2"
    py="$1"
    borderWidth={1}
    borderColor={isSelected ? '#DDDDDD' : '#EEEEEE'}
    borderRadius={16}>
    <Text
      fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
      fontWeight="$medium"
      color={isSelected ? '#222222' : '#AAAAAA'}>
      {label}
    </Text>
  </Box>
);

export default FilterBadge;
