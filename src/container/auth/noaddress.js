import { connect } from 'react-redux';
import { noaddress } from '../../screens/auth';
import { getAllshop } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllshop
};

export default connect(mapStateToProps, mapDispatchToProps)(noaddress);
