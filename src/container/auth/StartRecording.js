import { connect } from 'react-redux';
import { StartRecording } from '../../screens/auth';
import { liveeventdetail,removedata,schuleEventstart,getbrandName,getchanneltoken } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    removedatalioder: state.auth.removedatalioder,
    livedetail: state.auth.livedetail,
    brandName:state.auth.brandName,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    liveeventdetail,
    removedata,
    schuleEventstart,
    getbrandName,
    getchanneltoken
};

export default connect(mapStateToProps, mapDispatchToProps)(StartRecording);