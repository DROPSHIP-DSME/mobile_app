import { connect } from 'react-redux';
import { Accountsum } from '../../screens/auth';
import { getAllshop,getselldeshboard } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getlistselldeshboard: state.auth.getlistselldeshboard,
});

const mapDispatchToProps = {
    getAllshop,
    getselldeshboard
};

export default connect(mapStateToProps, mapDispatchToProps)(Accountsum);
