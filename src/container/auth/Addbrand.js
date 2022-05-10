import { connect } from 'react-redux';
import { Addbrand } from '../../screens/auth';
import { createbrand,countrylist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    brandLoader: state.auth.brandLoader,
    countrylistdata: state.auth.countrylistdata,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    createbrand,
    countrylist
};

export default connect(mapStateToProps, mapDispatchToProps)(Addbrand);
