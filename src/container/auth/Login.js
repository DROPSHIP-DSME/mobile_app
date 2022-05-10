import { connect } from 'react-redux';
import { Login } from '../../screens/auth';
import {logoutreducerfun} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    logoutreducerfun
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
