import { connect } from 'react-redux';
import { ResetPassword } from '../../screens/auth';
import {resetPassword} from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    resetPasswordLoader:state.auth.resetPasswordLoader,
    resetPasswordSuccess:state.auth.resetPasswordSuccess,
    userIdResetpassoword:state.vendor.userIdResetpassoword
});

const mapDispatchToProps = {
    resetPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
