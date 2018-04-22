import { CONTAINER_WIDTHS, PADDINGS, BREAKPOINTS } from '../../constants/styles';

export default {
  Default: {
    width: CONTAINER_WIDTHS.SMALL,
    paddingLeft: PADDINGS.NORMAL,
    paddingRight: PADDINGS.NORMAL
  },

  [BREAKPOINTS.TABLET]: {
    Default: {
      maxWidth: CONTAINER_WIDTHS.NORMAL
    }
  },

  [BREAKPOINTS.DESKTOP]: {
    Default: {
      maxWidth: CONTAINER_WIDTHS.BIG,
      paddingLeft: PADDINGS.BIG,
      paddingRight: PADDINGS.BIG
    }
  },
}
