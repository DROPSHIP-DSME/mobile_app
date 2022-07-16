import { connect } from 'react-redux';
import { Accountproduct } from '../../screens/seller/product';
import { createshop,uploadpic,getAllcategory,createproduct,getbrandName,Brandslist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    productLoader: state.auth.productLoader,
    getlistcategory: state.auth.getlistcategory,
    brandName:state.auth.brandName,
    Brandlistdata: state.auth.Brandlistdata,
});

const mapDispatchToProps = {
    createshop,
    uploadpic,
    getAllcategory,
    createproduct,
    getbrandName,
    Brandslist
};

export default connect(mapStateToProps, mapDispatchToProps)(Accountproduct);
