import { connect } from 'react-redux';
import { OTPVerification } from '../../screens/auth';
import { verifyOtp,resendOtp } from '../../redux/actions/Auth';

const mapStateToProps = (state) => ({
    otpVerified: state.auth.otpVerified,
    signupCredentials: state.auth.signupCredentials,
    signupSuccess: state.auth.signupSuccess,
    otpVerificationLoader: state.auth.otpVerificationLoader
});

const mapDispatchToProps = {
    verifyOtp,
    resendOtp
};

export default connect(mapStateToProps, mapDispatchToProps)(OTPVerification);
