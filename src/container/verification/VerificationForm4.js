
import { connect } from 'react-redux';
import VerificationForm4 from '../../screens/verification/VerificationForm4';
import {uploadStoreFacade} from '../../redux/actions/Vendor'

const mapStateToProps = (state) => ({
    storeImageUploadLoader:state.vendor.storeImageUploadLoader
});

const mapDispatchToProps = {
    uploadStoreFacade
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationForm4);

