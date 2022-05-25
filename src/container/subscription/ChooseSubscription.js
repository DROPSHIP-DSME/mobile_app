import { connect } from 'react-redux';
import ChooseSubscription from '../../screens/subscription/ChooseSubscription';
import { getSubscriptionPlans } from '../../redux/actions/Coupon'

const mapStateToProps = (state) => ({
    subscriptionPlanData: state.coupon.subscriptionPlanData,
    subscriptionPlanDataLoader: state.coupon.subscriptionPlanDataLoader,
    subscriptionPurchaseData:state.coupon.subscriptionPurchaseData,
    subscriptionPurchaseLoader:state.coupon.subscriptionPurchaseData,
});

const mapDispatchToProps = {
    getSubscriptionPlans
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseSubscription);

