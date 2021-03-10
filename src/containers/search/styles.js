import { makeStyles } from '@material-ui/core/styles';
import {
  centerFlexRow,
  centerFlexCol,
  colors
} from '../../utils/commons';

const useStyles = makeStyles({
  container: {
    ...centerFlexCol,
    background: colors.white,
    height: '100%',
    width: '100%',
  },
  introMsg: {
    textAlign: 'center',
    fontWeight: '500',
    color: colors.gray,
    fontSize: 24,
    maxWidth: '60%'
  },
  searchContainer: {
    ...centerFlexRow,
    backgroundColor: colors.yellow,
    borderRadius: 30,
    boxShadow: colors.shadow,
    width: '60%',
    minWidth: 300,
    marginTop: 30
  },
  logo: {
    width: 60,
    marginLeft: 60
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