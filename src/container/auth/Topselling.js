 import { connect } from 'react-redux';
import { Topselling } from '../../screens/auth';
import { gettopsell } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    gettopsellproduct:state.auth.gettopsellproduct,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    gettopsell,
};

export default connect(mapStateToProps, mapDispatchToProps)(Topselling);

 