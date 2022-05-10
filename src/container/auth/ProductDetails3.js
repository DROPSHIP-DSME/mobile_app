import { connect } from 'react-redux';
import { ProductDetails3 } from '../../screens/auth';
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails3);
