import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../utils/commons'

const useStyles = makeStyles({
  '@keyframes slideInFromLeft': {
    '0%': {
      right: -2000
    },
    '100%': {
      right: 12
    }
  },
  contAlerts: {
    position: 'fixed',
    bottom: 60,
    right: 12,
    zIndex: 4
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blue,
    padding: 15,
    position: 'relative',
    right: 24,
    animation: '$slideInFromLeft 0.2s ease-out',
    transition: 'all 0.2s',
    marginBottom: 12
  },
  iconAlert: {
    color: colors.white,
    fontSize: 18,
    marginRight: 12
  },
  text: {
    margin: 0,
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
    marginRight: 12
  },
  btClose: {
    cursor: 'pointer',
    color: colors.white,
    fontSize: 20
  },
  success: {
    backgroundColor: colors.primary
  },
  warning: {
    backgroundColor: colors.orange
  },
  error: {
    backgroundColor: colors.red
  }
});

export default useStyles;