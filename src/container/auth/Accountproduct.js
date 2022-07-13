import { connect } from 'react-redux';
import { Accountproduct } from '../../screens/seller/product';
import { createshop,uploadpic,getAllcategory,createproduct } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    productLoader: state.auth.productLoader,
    getlistcategory: state.auth.getlistcategory,
});

const mapDispatchToProps = {
    createshop,
    uploadpic,
    getAllcategory,
    createproduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Accountproduct);
