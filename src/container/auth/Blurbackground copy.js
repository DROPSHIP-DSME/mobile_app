import { connect } from 'react-redux';
import { Blurbackground } from '../../screens/auth';
import { schuleEventstart,
    updateleftcount,
    updatediscount,
    getalleventlist,
    cartadd,
    postcomment,
    getLiveCustomer,
    getbrandName,
    getchannelbrandName,
    updateaudiancecount, 
    getaudiancecount,
    cartPrice,chekout, } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    addcartLoader: state.auth.addcartLoader,
    commentLoder: state.auth.commentLoder,
    getliveeventlist: state.auth.getliveeventlist,
    cartlistdata1: state.auth.cartlistdata1,
    showbrandName:state.auth.brandName,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    audiancecount: state.auth.audiancecount,
    getalleventdata: state.auth.getalleventdata,
    totalcartprice:state.auth.totalcartprice,
    chekoutLoder: state.auth.chekoutLoder,
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
    updateleftcount,
    updatediscount,
    getalleventlist,
    cartPrice,
    chekout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Blurbackground);
