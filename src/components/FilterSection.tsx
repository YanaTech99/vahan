import React from 'react';
import {Pressable} from 'react-native';
import {Box, HStack, Text} from '@gluestack-ui/themed';
import {FilterBadge} from './FilterBadge';
import {TextFontFamily} from '../utils/units/Textfont';
type FilterSectionProps = {
  label: string;
  value: string;
  options: string[];
  showMoreLabel: string;
  onSelect?: (item: string, filterType: string) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({
  label,
  value,
  options,
  showMoreLabel,
  onSelect,
}) => (
  <Box>
    <Text
      fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
      fontSize="$xl"
      color="$secondaryText">
      {label} <Text color="$primaryText">{value}</Text>
    </Text>
    <HStack flexWrap="wrap" mt="$4" space="md">
      {options.map((item, index) => (
        <Pressable key={item} onPress={() => onSelect?.(item, label)}>
          <FilterBadge label={item} isSelected={index % 2 === 0} />
        </Pressable>
      ))}
    </HStack>
    <Pressable>
      <Text
        fontFamily={TextFontFamily.ROUND_MPLUS_MEDIUM}
        fontWeight="$normal"
        fontSize="$sm"
        color="$tertiaryText"
        textAlign="right">
        {showMoreLabel}
      </Text>
    </Pressable>
  </Box>
);

export default FilterSection;
