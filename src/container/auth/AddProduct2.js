import { connect } from 'react-redux';
import { AddProduct2 } from '../../screens/auth';
import { createproduct2,getAllcategory,Brandslist,uploadpic } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    productLoader2: state.auth.productLoader2,
    getlistcategory: state.auth.getlistcategory,
    Brandlistdata: state.auth.Brandlistdata,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});
 
const mapDispatchToProps = {
    createproduct2, 
    getAllcategory,
    Brandslist,
    uploadpic
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct2);
