import { connect } from 'react-redux';
import { editviewaddress } from '../../screens/auth';
import { getAllshop,saveaddress,getuseraddress } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllshop,
    saveaddress,
    getuseraddress
};

export default connect(mapStateToProps, mapDispatchToProps)(editviewaddress);
