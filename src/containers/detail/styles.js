import { makeStyles } from '@material-ui/core/styles';
import { colors, centerFlexRow } from '../../utils/commons';

const useStyles = makeStyles({
  container: {
    background: colors.white,
    height: '100%',
    width: '100%',
    minWidth: 880
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
  containerItem: {
    backgroundColor: colors.white,
    padding: 30
  },
  contInfo: {
    ...centerFlexRow,
    alignItems: 'flex-start'
  },
  image: {
    flex: 2,
    objectFit: 'contain',
    marginRight: 60,
    maxHeight: 420
  },
  infoMeta: {
    flex: 1
  },
  rowStatus: {
    color: colors.gray,
    fontSize: 12
  },
  rowShip: {
    color: colors.gray,
    fontSize: 12,
    marginTop: 12
  },
  title: {
    fontSize: 20,
    margin: '12px 0px'
  },
  contPrice: {
    ...centerFlexRow,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  price: {
    fontSize: 42,
    margin: 0
  },
  decimals: {
    fontSize: 18,
    margin: 0,
    paddingTop: 6
  },
  btBuy: {
    backgroundColor: colors.blue,
    color: colors.white,
    textAlign: 'center',
    padding: 12,
    borderRadius: 6,
    marginTop: 60,
    cursor: 'pointer'
  },
  lblDescription: {
    fontSize: 24,
    margin: 0,
    marginTop: 60,
  },
  description: {
    fontSize: 18,
    margin: 0,
    marginTop: 18,
    color: colors.gray
  }
});

export default useStyles;