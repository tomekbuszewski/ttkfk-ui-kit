import { BREAKPOINTS } from '../../constants/styles';

export default {
  Wrapper: {
    padding: 20,
    alignSelf: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    flexDirection: 'column',
    height: '100vh'
  },

  WrapperLarge: {
    padding: '20px 0'
  },

  Title: {
    marginTop: 'auto'
  },

  [BREAKPOINTS.TABLET]: {
    Wrapper: {
      height: 680
    }
  },

  [BREAKPOINTS.DESKTOP]: {
    Wrapper: {
      height: 800
    },

    WrapperLarge: {
      padding: '40px 0'
    }
  }
}
