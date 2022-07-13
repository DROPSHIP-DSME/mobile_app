import { connect } from 'react-redux';
import { Accountorderview } from '../../screens/customer/account';
import {
    shopproduct, 
    shopsellcount,
    getincomingtlist,
    getorderdetail,
    updateorderdetail
} from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    getshopproductlist: state.auth.getshopproductlist,
    getshopselllist: state.auth.getshopselllist,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getinconeorderlist: state.auth.getinconeorderlist,
    getorderlist: state.auth.getorderlist,
});

const mapDispatchToProps = {
    shopproduct,
    shopsellcount,
    getincomingtlist,
    getorderdetail,
    updateorderdetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Accountorderview);