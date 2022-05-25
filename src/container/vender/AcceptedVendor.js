
import { connect } from 'react-redux';
import AcceptedVendor from '../../screens/vender/acceptedVendor';
import { setVendorInfo, acceptVendor } from '../../redux/actions/Vendor'

const mapStateToProps = (state) => ({
    loginCredentials: state.auth.loginCredentials,
    acceptVendorLoader:state.vendor.acceptVendorLoader
});

const mapDispatchToProps = {
    acceptVendor,
    setVendorInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(AcceptedVendor);

