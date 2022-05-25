
import { connect } from 'react-redux';
import AddBankAccount from '../../screens/earning/manageBank/AddBankAccount';
import { addNewBankAccount,updateBankAccount } from '../../redux/actions/Bank'

const mapStateToProps = (state) => ({
    addBankAccountLoader: state.bank.addBankAccountLoader,
    addedBankInfo: state.bank.addedBankInfo,
    loginCredentials:state.auth.loginCredentials,
    updateBankLoader:state.bank.updateBankLoader
});

const mapDispatchToProps = {
    addNewBankAccount,
    updateBankAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBankAccount);

