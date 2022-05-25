
import { connect } from 'react-redux';
import SingleCouponInsight from '../../screens/insightes/SingleCouponInsight';
import { getRedeemedTrackingData } from '../../redux/actions/Coupon';

const mapStateToProps = (state) => ({
    redeemedCouponTrackingData: state.coupon.redeemedCouponTrackingData,
    redeemedCouponTrackingLoader: state.coupon.redeemedCouponTrackingLoader
});

const mapDispatchToProps = {
    getRedeemedTrackingData
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCouponInsight);

