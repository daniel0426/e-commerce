
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(12),
  },
  root: {
    flexGrow: 1,
  },
}));