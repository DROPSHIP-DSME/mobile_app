import { connect } from 'react-redux';
import { Accountsum } from '../../screens/customer/account';
import { getAllshop,getselldeshboard,getincomingtlist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
    getinconeorderlist: state.auth.getinconeorderlist,

});

const mapDispatchToProps = {
    getAllshop,
    getselldeshboard,
    getincomingtlist
};

export default connect(mapStateToProps, mapDispatchToProps)(Accountsum);
