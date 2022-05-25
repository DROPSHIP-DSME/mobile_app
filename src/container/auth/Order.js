
import { connect } from 'react-redux';
import { Order } from '../../screens/auth';
import { getorderdetail,updateorderdetail } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getorderlist: state.auth.getorderlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getorderdetail,
    updateorderdetail
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Order);

