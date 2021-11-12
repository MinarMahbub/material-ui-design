import { makeStyles } from '@material-ui/core/styles';


const useStlyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon:{
        marginRight: '14px'
    },

    buttons:{
        marginTop: '4px'
    },
    cardGrid:{
        padding: '20px 0'
    },
    Card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        padding: '56.25%' //16:9
    },
    cardContent: {
        flexGrow: '1'
    },
    footer:{
        backgroundColor: theme.palette.paper,
        padding: '50px 0'
    }

}));

export default useStlyles;