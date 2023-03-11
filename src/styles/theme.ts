type TFavorityColor = {
  primary: string;
  secondary: string;
  tertiary: string;
  fontColor: string;
};

const favoriteColor = (): TFavorityColor => {
  const color = {
    primary: '#FEFEFE',
    secondary: '#FBFBFB',
    tertiary: '#03213E',
    fontColor: '#03213E',
  };
  return color;
};
export default {
  ThemeColor: {
    primary: favoriteColor().primary,
    secondary: favoriteColor().secondary,
    tertiary: favoriteColor().tertiary,
    fontColor: favoriteColor().fontColor,
  },
  whiteTheme: {
    primary: '#FEFEFE',
    secondary: '#03213E',
    tertiary: '#FBFBFB',
  },

  darkTheme: {
    primary: '#3F3F3F',
    secondary: '#141414',
    tertiary: '#FBFBFB',
  },

  fonts: {
    overpassLight: 'Overpass-Light',
    overpassRegular: 'Overpass-Regular',
    overpassSemiBold: 'Overpass-SemiBold',
    overpassBold: 'Overpass-Bold',
  },
};
