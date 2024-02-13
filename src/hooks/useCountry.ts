import { Country, CountryCode } from 'react-native-country-picker-modal';
import countries from '../utils/static/countries.json';

const useCountry = () => {
  const getCountryDetails = (value: string) => {
    return countries.find(
      country =>
        country.name.toLowerCase() === value?.toLowerCase() || country.cca2.toLowerCase() === value?.toLowerCase()
    );
  };

  const parseMobileNumber = (mobile: string, countryCode: CountryCode) => {
    const country = countries.find(country => country.cca2 === countryCode) as Country;
    const callingCode = `+${country?.callingCode}`;
    return { callingCode, country, mobile: mobile.replace(callingCode, '') };
  };

  return { countries, getCountryDetails, parseMobileNumber };
};

export default useCountry;