import { BREAKPOINTS, PADDINGS } from '../../constants/styles';

const HEIGHT = {
  XS: 40,
  LG: 60
};

const PADDING = {
  XS: PADDINGS.SMALL,
  LG: PADDINGS.NORMAL
};

const getHeight = (variant, h = HEIGHT, p = PADDING)  => h[variant] + p[variant] * 2;

export default {
  Main: {
    height: getHeight('XS'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  Logo: {
    height: HEIGHT.XS
  },

  [BREAKPOINTS.DESKTOP]: {
    Main: {
      height: getHeight('LG')
    },

    Logo: {
      height: HEIGHT.LG
    }
  }
}
