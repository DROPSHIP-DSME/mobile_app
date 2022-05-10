import { connect } from 'react-redux';
import { upcoming } from '../../screens/auth';
import { getalleventlist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    getalleventdata: state.auth.getalleventdata,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getalleventlist
};

export default connect(mapStateToProps, mapDispatchToProps)(upcoming);
