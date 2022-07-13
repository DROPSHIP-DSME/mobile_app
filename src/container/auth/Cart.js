import { connect } from 'react-redux';
import { Cart } from '../../screens/customer/cart';
import { cartlist,cartdata,increcartlist,deletedata } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    cartlistdata1: state.auth.cartlistdata1,
    incrementcartlioder: state.auth.incrementcartlioder,
    deletedatalioder: state.auth.deletedatalioder,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
});

const mapDispatchToProps = {   
    cartlist,
   cartdata,
   increcartlist,
   deletedata
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);