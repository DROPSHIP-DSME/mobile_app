import { connect } from 'react-redux';
import { DeGaulle } from '../../screens/auth';
import { getAllcategory } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistcategory: state.auth.getlistcategory,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    getAllcategory
}; 

export default connect(mapStateToProps, mapDispatchToProps)(DeGaulle );