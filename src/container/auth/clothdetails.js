import { connect } from 'react-redux';
import { clothdetails } from '../../screens/auth';
import { cartadd } from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    addcartLoader: state.auth.addcartLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    cartadd,
    
};

export default connect(mapStateToProps, mapDispatchToProps)(clothdetails);
