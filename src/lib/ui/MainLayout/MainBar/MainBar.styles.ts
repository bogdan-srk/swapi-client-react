import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${ theme.palette.divider }`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

export default useStyles;
