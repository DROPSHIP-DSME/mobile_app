import { connect } from 'react-redux';
import { Product } from '../../screens/auth';
import { Brandslist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    Brandlistdata: state.auth.Brandlistdata,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    Brandslist
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
