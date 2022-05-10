import { connect } from 'react-redux';
import { Livechannel } from '../../screens/auth';
import { getAllcategory,getAllproduct,createcategoryproduct } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistcategory: state.auth.getlistcategory,
    getlistproduct: state.auth.getlistproduct,
    addcategoryproductLoader: state.auth.addcategoryproductLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
}); 

const mapDispatchToProps = {
    getAllcategory,
    getAllproduct,
    createcategoryproduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Livechannel);

