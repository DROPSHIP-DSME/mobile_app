 import { connect } from 'react-redux';
import { Processorder } from '../../screens/auth';
import { getprocesstlist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getprocessorderlist: state.auth.getprocessorderlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getprocesstlist
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Processorder);

