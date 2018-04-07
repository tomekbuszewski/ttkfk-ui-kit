import { FONT_SIZES, FONT_FACES, FONT_WEIGHTS, COLORS, BREAKPOINTS } from '../../constants/styles';

export default {
  Default: {
    fontSize: FONT_SIZES.NORMAL,
    lineHeight: 1,
    fontFamily: FONT_FACES.RUBIK,
    fontWeight: FONT_WEIGHTS.BOLD,
    color: COLORS.WHITE,
    margin: '0 0 20px 0'
  },

  Large: {
    fontSize: FONT_SIZES.TITLE.XS
  },

  [BREAKPOINTS.TABLET]: {
    Large: {
      fontSize: FONT_SIZES.TITLE.SM
    }
  },

  [BREAKPOINTS.DESKTOP]: {
    Large: {
      fontSize: FONT_SIZES.TITLE.LG,
      marginBottom: 40
    }
  }
}
