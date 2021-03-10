import { makeStyles } from '@material-ui/core/styles';
import {
  centerFlexRow,
  colors
} from '../../utils/commons';

const useStyles = makeStyles({
  container: {
    backgroundColor: colors.white,
    ...centerFlexRow,
    padding: 12,
    alignItems: 'flex-start',
    borderBottom: `1px solid ${colors.bgGray}`,
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7
    }
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: colors.bgGray,
    objectFit: 'cover'
  },
  contInfo: {
    flex: 3,
    margin: '12px 24px 0px 24px'
  },
  infoPrice: {
    ...centerFlexRow,
    justifyContent: 'flex-start'
  },
  price: {
    margin: 0,
    fontSize: 24
  },
  dotGreen: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: colors.green,
    marginLeft: 12
  },
  name: {
    fontSize: 18,
    margin: 0,
    marginTop: 12
  },
  category: {
    marginTop: 12,
    flex: 1
  }
});

export default useStyles;