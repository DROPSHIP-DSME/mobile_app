import { connect } from 'react-redux';
import { Search } from '../../screens/customer/search';
import { getAllproduct,searchproduct,Brandslist,getalleventlist1,getchanneltoken,getsearchlist,searchitems } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistproduct: state.auth.getlistproduct,
    getalleventdata: state.auth.getalleventdata,
    searchlistitmes: state.auth.searchlistitmes,
    searchlistdata: state.auth.searchlistdata,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllproduct,
    searchproduct,
    getchanneltoken,
    getalleventlist1,
    getsearchlist,
    searchitems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
