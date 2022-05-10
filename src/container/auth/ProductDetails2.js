import { connect } from 'react-redux';
import { ProductDetails2 } from '../../screens/auth';
import { getAllproductdetails,cartadd } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    getlistproductdetails: state.auth.getlistproductdetails,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,

});

const mapDispatchToProps = {
    getAllproductdetails,
    cartadd
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails2);
