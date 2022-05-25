
import { connect } from 'react-redux';
import Earning from '../../screens/earning';
import { getTrackEarningData } from '../../redux/actions/Vendor'

const mapStateToProps = (state) => ({
    isInternetConnected: state.auth.isInternetConnected,
    trackEarningData: state.vendor.trackEarningData,
    trackEarningLoader: state.vendor.trackEarningLoader
});

const mapDispatchToProps = {
    getTrackEarningData
};

export default connect(mapStateToProps, mapDispatchToProps)(Earning);

