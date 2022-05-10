import { connect } from 'react-redux';
import { Viewbrand } from '../../screens/auth';
import { branddetails } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    getBranddetails: state.auth.getBranddetails,
    getlistbranddetails: state.auth.getlistbranddetails,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    branddetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Viewbrand);
