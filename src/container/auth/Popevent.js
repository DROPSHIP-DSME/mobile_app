import { connect } from 'react-redux';
import { Popevent } from '../../screens/customer/event';
import { getAllproduct,searchproduct,Brandslist,getalleventlist1,getchanneltoken } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistproduct: state.auth.getlistproduct,
    getalleventdata: state.auth.getalleventdata,

    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllproduct,
    searchproduct,
    getchanneltoken,
    getalleventlist1
};

export default connect(mapStateToProps, mapDispatchToProps)(Popevent);
