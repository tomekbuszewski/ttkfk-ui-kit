import { BREAKPOINTS, COLORS } from '../../constants/styles';

export default {
  Wrapper: {
    justifyContent: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    flexDirection: 'column',
    height: '100vh',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',

    '&::after': {
      content: '""',
      position: 'absolute',
      display: 'block',
      zIndex: 1,
      background: `linear-gradient(135deg, #ffffff 0%, #000000 100%);`,
      width: '100%',
      height: '100%',
      opacity: 0.6
    }
  },

  WrapperMagda: {
    '&::after': {
      background: `linear-gradient(135deg, ${COLORS.MAGDA} 0%, #000000 100%);`,
    }
  },

  WrapperEwa: {
    '&::after': {
      background: `linear-gradient(135deg, ${COLORS.EWA} 0%, #000000 100%);`,
    }
  },

  WrapperSmall: {
    Container: {
      paddingBottom: 0
    }
  },

  Container: {
    margin: 'auto auto 0',
    position: 'relative',
    zIndex: 2,
    paddingBottom: 20
  },

  Image: {
    position: 'absolute',
    zIndex: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    display: 'block'
  },

  Title: {
    marginTop: 'auto',
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
      Container: {
        paddingBottom: 40
      }
    }
  }
}
