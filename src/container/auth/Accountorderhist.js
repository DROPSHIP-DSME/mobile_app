import { connect } from 'react-redux';
import { Accountorderhist } from '../../screens/auth';
import { getAllshop,getincomingtlist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getinconeorderlist: state.auth.getinconeorderlist,
});
 
const mapDispatchToProps = {
    getAllshop,
    getincomingtlist
};

export default connect(mapStateToProps, mapDispatchToProps)(Accountorderhist);