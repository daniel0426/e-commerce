import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=> ({
        card: {
        maxWidth: '100%',
        transition: 'all 0.3s ease',
        '&:hover' : {
            boxShadow: `10px 10px 5px -4px rgba(0,0,0,0.58)`,
        }
      },
      media: {
        height: '100%',
        width: '100%',
        paddingTop: '82.5%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
}))