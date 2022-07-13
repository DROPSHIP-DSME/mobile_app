import { connect } from 'react-redux';
import { SearchProduct } from '../../screens/seller/golive';
import { Brandslist,searchbrand } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    Brandlistdata: state.auth.Brandlistdata,
});

const mapDispatchToProps = {
    Brandslist,
    searchbrand
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
