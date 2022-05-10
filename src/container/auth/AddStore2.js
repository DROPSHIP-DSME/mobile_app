import { connect } from 'react-redux';
import { AddStore2 } from '../../screens/auth';
import { createproduct3,getAllproductdetails } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    productLoader3: state.auth.productLoader3,
    getlistproductdetails: state.auth.getlistproductdetails,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    createproduct3,
    getAllproductdetails
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AddStore2);
