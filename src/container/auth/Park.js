import { connect } from 'react-redux';
import { Park } from '../../screens/auth';
import { getAllproduct } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistproduct: state.auth.getlistproduct,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllproduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Park);
