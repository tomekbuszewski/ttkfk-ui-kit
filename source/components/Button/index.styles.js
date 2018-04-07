import { FONT_SIZES, BREAKPOINTS, COLORS } from '../../constants/styles';

export default {
  Normal: {
    display: 'inline-block',
    fontSize: FONT_SIZES.EXTRA_SMALL,
    padding: '8px 15px',
    borderRadius: 30,
    border: '1px solid',
    borderColor: COLORS.DARKWHITE,
    outline: 0,
    background: 'transparent',
    color: COLORS.WHITE,
    cursor: 'pointer'
  },

  [BREAKPOINTS.DESKTOP]: {
    Normal: {
      padding: '13px 20px'
    }
  }
}
