import { connect } from 'react-redux';
import { ForgetPassword } from '../../screens/auth';
import { forgetPassword } from '../../redux/actions/Auth';


const mapStateToProps = (state) => ({
    forgetPasswordLoader:state.auth.forgetPasswordLoader,
    forgetPasswordSuccess:state.auth.forgetPasswordSuccess
});

const mapDispatchToProps = {
    forgetPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
