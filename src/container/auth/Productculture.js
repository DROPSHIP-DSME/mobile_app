import { connect } from 'react-redux';
import { Productculture } from '../../screens/auth';
import { signup } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
});

const mapDispatchToProps = {
    signup
};

export default connect(mapStateToProps, mapDispatchToProps)(Productculture);

