import { connect } from 'react-redux';
import { RegistrationShop } from '../../screens/auth';
import {shoplogin} from '../../redux/actions/Auth'



const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    shoplogin
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationShop);


