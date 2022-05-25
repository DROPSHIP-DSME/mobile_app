
import { connect } from 'react-redux';
import SelectBank from '../../screens/earning/manageBank/SelectBank';
import { getBankList } from '../../redux/actions/Bank'

const mapStateToProps = (state) => ({
    bankListLoader: state.bank.bankListLoader,
    banklist: state.bank.banklist,
    isInternetConnected: state.auth.isInternetConnected
});

const mapDispatchToProps = {
    getBankList
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectBank);

