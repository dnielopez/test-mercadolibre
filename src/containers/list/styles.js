import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../utils/commons';

const useStyles = makeStyles({
  container: {
    background: colors.white,
    height: '100%',
    width: '100%',
  },
  list: {
    backgroundColor: colors.bgGray,
    height: 'calc(100% - 60px)',
    overflow: 'auto'
  },
  breadcrumbs: {
    width: 'calc(100% - 120px)',
    margin: '24px auto',
    color: colors.gray,
    fontSize: 12
  },
  scrollList: {
    width: 'calc(100% - 120px)',
    margin: '0px auto 24px auto'
  },
  emptyTxt: {
    textAlign: 'center',
    backgroundColor: colors.white,
    padding: '30px 60px'
  }
});

export default useStyles;