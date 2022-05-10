import { connect } from 'react-redux';
import { CreateAccount } from '../../screens/auth';
import {signup} from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    signupCredentials: state.auth.signupCredentials,
    signupSuccess: state.auth.signupSuccess,
    registrationLoader: state.auth.registrationLoader
});

const mapDispatchToProps = {
    signup
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
