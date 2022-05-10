import { connect } from 'react-redux';
import { videocall } from '../../screens/auth';
import { signup } from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    addcartLoader: state.auth.addcartLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    signup,
    
};

export default connect(mapStateToProps, mapDispatchToProps)(videocall);
