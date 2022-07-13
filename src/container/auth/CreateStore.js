import { connect } from 'react-redux';
import { CreateStore } from '../../screens/seller/product';
import { createshop,createbrand } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    createshop,
    createbrand,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStore);
