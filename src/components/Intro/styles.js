import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=> ({
    toolbar: theme.mixins.toolbar,
    intro : {
        flexGrow: 1,
        padding: theme.spacing(4),
        backgroundColor : '#09143C',
    },
    introContainer: {
        padding: '1em 10% ',
    },
    title :{
        color:'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
          },
    },
    subtitle: {
        color:'white',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
          },
    },
    btn : {
        marginTop: '1em',
    }
}));