import { connect } from 'react-redux';
import { deletaccount } from '../../screens/auth';
import { getAllshop,deleteUseraccount } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    setdeleteuser: state.auth.setdeleteuser,
});

const mapDispatchToProps = {
    getAllshop,
    deleteUseraccount
};

export default connect(mapStateToProps, mapDispatchToProps)(deletaccount);
