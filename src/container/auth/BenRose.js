import { connect } from 'react-redux';
import { BenRose } from '../../screens/auth';
import { schuleEventstart,getalleventlist,cartadd,postcomment,getLiveCustomer,getbrandName,getchannelbrandName,updateaudiancecount,getaudiancecount } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    addcartLoader: state.auth.addcartLoader,
    commentLoder: state.auth.commentLoder,
    getliveeventlist: state.auth.getliveeventlist,
    showbrandName:state.auth.brandName,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    audiancecount: state.auth.audiancecount,
    getalleventdata: state.auth.getalleventdata,
});

const mapDispatchToProps = {
    cartadd,
    postcomment,
    getLiveCustomer,
    getbrandName,
    getchannelbrandName,
    updateaudiancecount,
    getaudiancecount,
    schuleEventstart,
    getalleventlist
};

export default connect(mapStateToProps, mapDispatchToProps)(BenRose);