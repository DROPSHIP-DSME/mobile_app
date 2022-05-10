import { connect } from 'react-redux';

import { ChatSupport } from '../../screens/auth';
import { support,getsupportlist,getprofileuser } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({ 
    getchatsupportlist1: state.auth.getchatsupportlist1,
    supportLoder: state.auth.supportLoder,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    getprofileuserlist: state.auth.getprofileuserlist,
});
  
const mapDispatchToProps = {
    support,
    getsupportlist,
    getprofileuser
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatSupport); 