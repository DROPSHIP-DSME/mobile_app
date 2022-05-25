
import { connect } from 'react-redux';
import ManageBank from '../../screens/earning/manageBank';
import { getBankAccountList } from '../../redux/actions/Bank'

const mapStateToProps = (state) => ({
    bankAccountList: state.bank.bankAccountList,
    bankAccountListLoader: state.bank.bankAccountListLoader,
});

const mapDispatchToProps = {
    getBankAccountList
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBank);

