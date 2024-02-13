import { isIphoneX } from './iPhoneHelper';
import { getModel } from 'react-native-device-info';

export const getBottomSpaceForButtonForImportFromPrivateKey = item => {
  const model = getModel();
  const bottomSpace = item
    ? isIphoneX()
      ? model === 'iPhone 11'
        ? '49%'
        : model === 'iPhone 11 Pro Max'
        ? '48%'
        : '52%'
      : '47%'
    : '10%';

  return bottomSpace;
};
export const getBottomSpaceForButton = item => {
  const model = getModel();
  const bottomSpace = item
    ? isIphoneX()
      ? model === 'iPhone 11'
        ? '51%'
        : '42%'
      : '50%'
    : '10%';

  return bottomSpace;
};

export const rstoreWithICloud = item => {
  const model = getModel();
  const bottomSpace = item
    ? isIphoneX()
      ? model === 'iPhone 11'
        ? '51%'
        : model === 'iPhone 11 Pro Max'
        ? '50%'
        :'54%'
      : '50%'
    : '10%';

  return bottomSpace;
};

export const getTopSpaceForButton = item => {
  const model = getModel();
  const bottomSpace = item
    ? isIphoneX()
      ? model === 'iPhone 11'
        ? '25%'
        : model === 'iPhone 11 Pro'
        ? '11%'
        : model === 'iPhone 11 Pro Max'
        ? '30%'
        : '18%'
      : '31%'
    : '0%';

  return bottomSpace;
};

export const skipButton = () => {
  const model = getModel();

  let height = 0;
  if (model === 'iPhone 11') {
    height = 200;
  } else if (model === 'iPhone 8') {
    height = 100;
  } else if (model === 'iPhone') {
    height = 230;
  } else {
    height = 220;
  }
  return height;
};
