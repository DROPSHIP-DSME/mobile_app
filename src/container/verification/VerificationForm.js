
import { connect } from 'react-redux';
import VerificationForm from '../../screens/verification/VerificationForm';
import { createOrUpdateStore } from '../../redux/actions/Vendor';

const mapStateToProps = (state) => ({
    createStoreLoader: state.vendor.createStoreLoader,
    storeInfo: state.vendor.storeInfo,
    storeAutofilInfo: state.vendor.storeAutofilInfo,
});

const mapDispatchToProps = {
    createOrUpdateStore
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationForm);

