import { FONT_SIZES, FONT_FACES, FONT_WEIGHTS, COLORS, BREAKPOINTS } from '../../constants/styles';

export default {
  Default: {
    fontSize: FONT_SIZES.BODY.XS,
    lineHeight: 1.5,
    fontFamily: FONT_FACES.ROBOTO,
    fontWeight: FONT_WEIGHTS.NORMAL,
    color: COLORS.WHITE,
    margin: '0 0 20px 0',
    maxWidth: 550
  },

  [BREAKPOINTS.DESKTOP]: {
    Default: {
      marginBottom: 40,
      maxWidth: 380
    }
  }
}
