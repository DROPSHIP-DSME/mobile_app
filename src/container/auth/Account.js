import { connect } from 'react-redux';
import { Account } from '../../screens/auth';
import { support,getAllshop,getprofileuser,getuseraddress,getusercard,getsupportlist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    getlistshop: state.auth.getlistshop,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getprofileuserlist: state.auth.getprofileuserlist,
    getuseraddresslist: state.auth.getuseraddresslist,
    getusercardlist: state.auth.getusercardlist,
    getchatsupportlist1: state.auth.getchatsupportlist1,
});

const mapDispatchToProps = {
    getAllshop,
    getprofileuser,
    getuseraddress,
    getusercard,
    getsupportlist,
    support
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
