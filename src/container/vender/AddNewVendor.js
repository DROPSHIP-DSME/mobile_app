
import { connect } from 'react-redux';
import AddNewVendor from '../../screens/vender/addNewVendor';
import { addNewVendor,updateVendor } from '../../redux/actions/Vendor'

const mapStateToProps = (state) => ({
    addVendorLoader:state.vendor.addVendorLoader,
    vendorAddedSuccess:state.vendor.vendorAddedSuccess,
    updatedVendorInfo: state.vendor.updatedVendorInfo,
    updateVendorLoader:state.vendor.updateVendorLoader
});

const mapDispatchToProps = {
    addNewVendor,
    updateVendor
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewVendor);

