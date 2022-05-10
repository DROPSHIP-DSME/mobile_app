import { connect } from 'react-redux';
import { Registration } from '../../screens/auth';
import {login} from '../../redux/actions/Auth'



const mapStateToProps = (state) => ({
    loginLoader:state.auth.loginLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);


