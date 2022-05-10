import { connect } from 'react-redux';
import { paymentedit } from '../../screens/auth';
import { getAllshop ,savepaymentaddress,getprofileuser} from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllshop,
    savepaymentaddress,
    getprofileuser
};

export default connect(mapStateToProps, mapDispatchToProps)(paymentedit);
