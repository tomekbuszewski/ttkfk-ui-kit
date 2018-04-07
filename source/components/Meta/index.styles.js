import { FONT_SIZES, FONT_FACES, FONT_WEIGHTS, COLORS } from '../../constants/styles';

export default {
  Wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    color: COLORS.WHITE
  },
  PhotoWrapper: {
    width: 60,
    height: 60,
    position: 'relative',
    borderRadius: '100%',
    overflow: 'hidden',
    marginRight: 10
  },
  Photo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%'
  },
  TextWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center'
  },
  AuthorName: {
    fontSize: FONT_SIZES.BODY.XS,
    fontFamily: FONT_FACES.RUBIK,
    fontWeight: FONT_WEIGHTS.BOLD,
    fontStyle: 'normal',
    marginBottom: 6,
    width: '100%'
  },
  Published: {
    fontSize: FONT_SIZES.EXTRA_SMALL
  }
}
