
import { connect } from 'react-redux';
import VendorDetails from '../../screens/vender/vendorDetails';
import { getSingleVendor } from '../../redux/actions/Vendor'


const mapStateToProps = (state) => ({
    singleVendorDetails: state.vendor.singleVendorDetails,
    singleVendorDetailsLoader: state.vendor.singleVendorDetailsLoader,
});

const mapDispatchToProps = {
    getSingleVendor
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorDetails);

