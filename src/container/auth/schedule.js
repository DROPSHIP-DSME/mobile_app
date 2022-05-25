import { connect } from 'react-redux';
import { schedule } from '../../screens/auth';
import { liveeventdetail,removedata,schuleEvent,getbrandName} from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    removedatalioder: state.auth.removedatalioder,
    livedetail: state.auth.livedetail,
    scheduleLoader: state.auth.scheduleLoader,
    brandName:state.auth.brandName,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getalleventdata: state.auth.getalleventdata,
});
 
const mapDispatchToProps = {
    liveeventdetail,
    removedata,
    schuleEvent,
    getbrandName
};
  
export default connect(mapStateToProps, mapDispatchToProps)(schedule);
