import React from 'react';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {DateTimeModelProps} from './DatePicker.interface';
import {Box} from '@gluestack-ui/themed';

const DateTimePickerModel: React.FC<DateTimeModelProps> = ({
  isDatePickerVisible,
  handleConfirm,
  hideDatePicker,
  SelectionType = 'date',
  currentDate,
  minimumDate
}) => {
  return (
    <Box>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={SelectionType}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="spinner"
        is24Hour={false}
        date={currentDate}
        minimumDate={minimumDate}
      />
    </Box>
  );
};
export default DateTimePickerModel;
