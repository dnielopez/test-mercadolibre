import { makeStyles } from '@material-ui/core/styles';
import {
  centerFlexRow,
  centerFlexCol,
  colors
} from '../../utils/commons';

const useStyles = makeStyles({
  searchContainer: {
    ...centerFlexRow,
    backgroundColor: colors.yellow,
    boxShadow: colors.shadow,
    width: '100%',
  },
  logo: {
    width: 60,
    marginLeft: 60,
    cursor: 'pointer'
  },
  inputSearch: {
    outline: 'none',
    padding: '12px 24px',
    borderColor: colors.bgGray,
    borderWidth: 1,
    flex: 1
  },
  btSearch: {
    height: 40,
    width: 40,
    marginRight: 60,
    ...centerFlexCol,
    color: colors.black,
    backgroundColor: colors.bgGray,
    cursor: 'pointer'
  }
});

export default useStyles;