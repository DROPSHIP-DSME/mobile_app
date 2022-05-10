import { connect } from 'react-redux';
import { ShoesOnboard } from '../../screens/auth';
import { getprofileuser } from '../../redux/actions/Auth'

const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getprofileuserlist: state.auth.getprofileuserlist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getprofileuser 
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoesOnboard);

