import { connect } from 'react-redux';
import { Category } from '../../screens/auth';
import { getAllcategory,removecategory,getbrandName } from '../../redux/actions/Auth'
 
const mapStateToProps = (state) => ({
    removecategorylioder: state.auth.removecategorylioder,
    getlistcategory: state.auth.getlistcategory,
    brandName:state.auth.brandName,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});
 
const mapDispatchToProps = {
    getAllcategory,
    removecategory,
    getbrandName 
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
