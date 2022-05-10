import { connect } from 'react-redux';
import { editaddress } from '../../screens/auth';
import { getAllshop,getuseraddress,deleteaddress } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getuseraddresslist: state.auth.getuseraddresslist,
    deleteaddresslioder: state.auth.deleteaddresslioder,
});

const mapDispatchToProps = {
    getAllshop,
    getuseraddress,
    deleteaddress
};

export default connect(mapStateToProps, mapDispatchToProps)(editaddress);
