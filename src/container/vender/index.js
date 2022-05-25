
import { connect } from 'react-redux';
import Vender from '../../screens/vender';
import { getVendorList, acceptVendor,setVendorInfo } from '../../redux/actions/Vendor'

const mapStateToProps = (state) => ({
    vendorList: state.vendor.vendorList,
    vendorListLoader: state.vendor.vendorListLoader,
    acceptVendorInfo: state.vendor.acceptVendorInfo,
    acceptVendorLoader: state.vendor.acceptVendorLoader,
    loginCredentials: state.auth.loginCredentials,
    isInternetConnected: state.auth.isInternetConnected,
    vendorInfo: state.vendor.vendorInfo,
});

const mapDispatchToProps = {
    getVendorList,
    acceptVendor,
    setVendorInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Vender);

