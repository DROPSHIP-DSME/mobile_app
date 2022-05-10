import { connect } from 'react-redux';
import { clothing } from '../../screens/auth';
import { signup } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    signup
};

export default connect(mapStateToProps, mapDispatchToProps)(clothing);
