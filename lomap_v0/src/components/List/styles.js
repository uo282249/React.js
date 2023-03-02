import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    formControl: {
        margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
        padding: '25px', maxHeight: '100px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        overflow: 'auto', maxHeight: '500px',
    },
    paper: {
        maxHeight: 400,
        overflow: 'auto',
        margin: 'auto',
        width: '100%',
        padding: theme.spacing(2),
    },
}));