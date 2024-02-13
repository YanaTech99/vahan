import moment from 'moment';

export const formatPhoneNumber = (phoneNumber: string) => {
  // Remove any non-numeric characters from the phone number
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  // Check if the cleaned number has 10 digits
  if (cleanedNumber.length === 10) {
    // Use substring to split the number into groups and join them with two spaces
    return (
      cleanedNumber.substring(0, 3) +
      '  ' +
      cleanedNumber.substring(3, 6) +
      '  ' +
      cleanedNumber.substring(6)
    );
  } else {
    // If the number doesn't have 10 digits, return the original input
    return phoneNumber;
  }
};


