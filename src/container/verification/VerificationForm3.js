
import { connect } from 'react-redux';
import VerificationForm3 from '../../screens/verification/VerificationForm3';
import {uploadStoreUtilityBill} from '../../redux/actions/Vendor'

const mapStateToProps = (state) => ({
    utilityBillInfo:state.vendor.utilityBillInfo,
    storeInfo: state.vendor.storeInfo,
    uploadUtilitybillLoader:state.vendor.uploadUtilitybillLoader
});

const mapDispatchToProps = {
    uploadStoreUtilityBill
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationForm3);

