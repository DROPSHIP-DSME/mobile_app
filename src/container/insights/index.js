
import { connect } from 'react-redux';
import Insights from '../../screens/insightes';
import { getRedeemedCoupons } from '../../redux/actions/Coupon'

const mapStateToProps = (state) => ({
    redeemedCoupons: state.coupon.redeemedCoupons,
    redeemedCouponsLoader: state.coupon.redeemedCouponsLoader,
});

const mapDispatchToProps = {
    getRedeemedCoupons
};

export default connect(mapStateToProps, mapDispatchToProps)(Insights);

