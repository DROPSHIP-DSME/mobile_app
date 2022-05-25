
import { connect } from 'react-redux';
import VerificationForm2 from '../../screens/verification/VerificationForm2';
import {uploadStoreUtilityBill} from '../../redux/actions/Vendor'

const mapStateToProps = (state) => ({
    utilityBillInfo:state.vendor.utilityBillInfo,
    storeInfo: state.vendor.storeInfo,
});

const mapDispatchToProps = {
    uploadStoreUtilityBill
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationForm2);

