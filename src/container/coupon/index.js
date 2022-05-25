import { connect } from 'react-redux';
import Coupons from '../../screens/coupons';
import { getCouponList } from '../../redux/actions/Coupon'

const mapStateToProps = (state) => ({
    couponsList: state.coupon.couponsList,
    couponsListLoader: state.coupon.couponsListLoader,
    isInternetConnected:state.auth.isInternetConnected
});

const mapDispatchToProps = {
    getCouponList 
};

export default connect(mapStateToProps, mapDispatchToProps)(Coupons);

