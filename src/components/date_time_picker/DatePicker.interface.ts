export interface DateTimeModelProps {
  isDatePickerVisible: boolean;
  handleConfirm: (dateTime: any) => void;
  hideDatePicker: () => void;
  SelectionType: "date" | "datetime" | "time";
  currentDate?: Date;
  minimumDate?:Date;
}
