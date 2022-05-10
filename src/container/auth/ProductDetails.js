import { connect } from 'react-redux';
import { ProductDetails } from '../../screens/auth';
import { getAllproductdetails } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistproductdetails: state.auth.getlistproductdetails,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    
});

const mapDispatchToProps = {
    getAllproductdetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
