import { connect } from 'react-redux';
import { Goliveshop } from '../../screens/auth';
import { signup,logoutreducerfun,shopsignupphone } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
});

const mapDispatchToProps = {
    signup,
    logoutreducerfun,
    shopsignupphone
};

export default connect(mapStateToProps, mapDispatchToProps)(Goliveshop);
