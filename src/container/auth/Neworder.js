 import { connect } from 'react-redux';
import { Neworder } from '../../screens/auth';
import { getincomingtlist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getinconeorderlist: state.auth.getinconeorderlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getincomingtlist
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Neworder);




