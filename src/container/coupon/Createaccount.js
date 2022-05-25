import { connect } from 'react-redux';
import Createaccount from '../../screens/coupons/Createaccount';
import { createNewCoupon } from '../../redux/actions/Coupon'

const mapStateToProps = (state) => ({
    createCouponLoader: state.coupon.createCouponLoader,
    createCouponSuccess: state.coupon.createCouponSuccess,
});

const mapDispatchToProps = {
    createNewCoupon
};

export default connect(mapStateToProps, mapDispatchToProps)(Createaccount);

