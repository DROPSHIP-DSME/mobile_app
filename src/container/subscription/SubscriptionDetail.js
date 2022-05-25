import { connect } from 'react-redux';
import SubscriptionDetail from '../../screens/subscription/SubscriptionDetail';
import { purchaseSubscriptionPlan, getSubscriptionStatus } from '../../redux/actions/Coupon'

const mapStateToProps = (state) => ({
    subscriptionPurchaseData: state.coupon.subscriptionPurchaseData,
    subscriptionStatus: state.coupon.subscriptionStatus,
    subscriptionPurchaseLoader: state.coupon.subscriptionPurchaseLoader,
});

const mapDispatchToProps = {
    purchaseSubscriptionPlan,
    getSubscriptionStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetail);

