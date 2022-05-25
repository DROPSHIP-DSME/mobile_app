import { connect } from 'react-redux';
import Payments from '../../screens/subscription/Payments';
import { purchaseSubscriptionPlan } from '../../redux/actions/Coupon'

const mapStateToProps = (state) => ({
    subscriptionPurchaseData: state.coupon.subscriptionPurchaseData,
    subscriptionPurchaseLoader: state.coupon.subscriptionPurchaseLoader,
    subscriptionPurchaseLoader: state.coupon.subscriptionPurchaseLoader,
    paymentDetail: state.coupon.paymentDetail,
    paymentLoader: state.coupon.paymentLoader
});

const mapDispatchToProps = {
    purchaseSubscriptionPlan
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);

