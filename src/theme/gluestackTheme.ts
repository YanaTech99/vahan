import {config as defaultConfig, createConfig} from '@gluestack-ui/themed';
import {TextFontFamily} from '../utils/units/Textfont';

export const config = createConfig({
  ...defaultConfig.theme,
  components: {
    Layout: {
      theme: {
        space: {
          p: '$5',
        },
      },
      componentConfig: {
        ancestorStyle: [],
        componentName: 'Layout',
        descendantStyle: [],
        resolveProps: [],
      },
    },
    Button: {
      theme: {
        variants: {
          variant: {
            ghost: {
              bg: 'transparent',
              _text: {
                color: '$black',
                fontFamily: TextFontFamily.ROUND_MPLUS_BOLD,
                fontWeight: 700,
              },
              ':pressed': {
                backgroundColor: 'transparent',
                opacity: 0.5,
              },
            },
          },
        },
      },
      componentConfig: {
        ancestorStyle: [],
        componentName: 'GhostButton',
        resolveProps: [],
        descendantStyle: ['_text'],
      },
    },
    Input: {
      theme: {
        variants: {
          variant: {
            ghost: {
              borderWidth: 0,
            },
          },
        },
      },
      componentConfig: {
        ancestorStyle: [],
        componentName: 'Input',
        resolveProps: [],
        descendantStyle: [],
      },
    },
    Text: {
      theme: {
        fontFamily: TextFontFamily.ROUND_MPLUS_MEDIUM,
        fontWeight: 400,
      },
    },
  },
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primaryText: '#000900',
      secondaryText: '#555555',
      tertiaryText: '#222222',
      errorText: '#D42A2A',
      placeholderText: '#BBBBBB',
      lightGrayText: '#DDDDDD',
    },
    fontWeights: {
      ...defaultConfig.theme.tokens.fontWeights,
      androidNormal: '400',
    },
    fonts: {
      mPlusRoundedBlack: 'RoundedMplus1c-Black',
      mPlusRoundedBold: 'RoundedMplus1c-Bold',
      mPlusRoundedExtraBold: 'RoundedMplus1c-ExtraBold',
      mPlusRoundedLight: 'RoundedMplus1c-Light',
      mPlusRoundedMedium: 'RoundedMplus1c-Medium',
      mPlusRoundedRegular: 'RoundedMplus1c-Regular',
      mPlusRoundedThin: 'RoundedMplus1c-Thin',
    },
  },
});

type ConfigType = typeof config;

declare module '@gluestack-style/react' {
  interface ICustomConfig extends ConfigType {}
}
