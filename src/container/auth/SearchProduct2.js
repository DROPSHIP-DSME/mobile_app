import { connect } from 'react-redux';
import { SearchProduct2 } from '../../screens/auth';
import { getAllproduct,searchproduct } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistproduct: state.auth.getlistproduct, 
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllproduct,
    searchproduct
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct2);
