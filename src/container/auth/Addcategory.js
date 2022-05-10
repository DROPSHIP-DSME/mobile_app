import { connect } from 'react-redux';
import { Addcategory } from '../../screens/auth';
import { createcategory } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    categoryLoader: state.auth.categoryLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {
    createcategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Addcategory);
