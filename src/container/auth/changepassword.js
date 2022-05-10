import { connect } from 'react-redux';
import { changepassword } from '../../screens/auth';
import {updatepassword} from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    signupCredentials: state.auth.signupCredentials,
    signupSuccess: state.auth.signupSuccess,
    registrationLoader: state.auth.registrationLoader,
    updatepasswordLoader: state.auth.updatepasswordLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    updatepassword
};

export default connect(mapStateToProps, mapDispatchToProps)(changepassword);
