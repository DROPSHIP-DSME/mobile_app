import { connect } from 'react-redux';
import { Selectproduct } from '../../screens/auth';
import { Brandslist,selectAllproduct,addproducttoevent,getAllproduct } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    Brandlistdata: state.auth.Brandlistdata,
    livedetail: state.auth.livedetail,
    getlistproduct: state.auth.getlistproduct,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    Brandslist,
    selectAllproduct,
    addproducttoevent,
    getAllproduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Selectproduct);
