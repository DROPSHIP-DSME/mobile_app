import { connect } from 'react-redux';
import { AddProduct } from '../../screens/auth';
import { createproduct,getAllcategory,uploadpic } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    productLoader: state.auth.productLoader,
    getlistcategory: state.auth.getlistcategory,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,

});

const mapDispatchToProps = { 
    createproduct,
    getAllcategory,
    uploadpic
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
