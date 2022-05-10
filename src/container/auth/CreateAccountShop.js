import { connect } from 'react-redux';
import { CreateAccountShop } from '../../screens/auth';
import { shopsignup } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    signupCredentials: state.auth.signupCredentials,
    signupSuccess: state.auth.signupSuccess,
    registrationLoader: state.auth.registrationLoader
});

const mapDispatchToProps = {
    shopsignup
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountShop);
