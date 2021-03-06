import { connect } from 'react-redux';
import { watchlist } from '../../screens/auth';
import { support,getAllproduct,getsupportlist,getalleventlist,getwatchlistproduct,getchanneltoken,getAllcategory } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistcategory: state.auth.getlistcategory,
    getlistproduct: state.auth.getlistproduct,
    showwatchlistproduct: state.auth.getwatchlistproduct,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getalleventdata: state.auth.getalleventdata,
    getchatsupportlist1: state.auth.getchatsupportlist1,
});

const mapDispatchToProps = {
    getAllcategory,
    getAllproduct,
    getalleventlist,
    getwatchlistproduct,
    getchanneltoken,
    getsupportlist,
    support
};

export default connect(mapStateToProps, mapDispatchToProps)(watchlist);
