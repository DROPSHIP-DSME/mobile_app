import { connect } from 'react-redux';
import { Sellheader } from '../../screens/common';
import { branddetails,Brandslist } from '../../redux/actions/Auth'


const mapStateToProps = (state) => ({
    vendorRequestLoader: state.auth.vendorRequestLoader,
    vendorRequestedInfo: state.auth.vendorRequestedInfo,
    getBranddetails: state.auth.getBranddetails,
    getlistbranddetails: state.auth.getlistbranddetails,
    loginuserid: state.auth.loginuserid,
    loginuserstatus: state.auth.loginuserstatus,
    Brandlistdata: state.auth.Brandlistdata,
});

const mapDispatchToProps = {
    branddetails,
    Brandslist 
};

export default connect(mapStateToProps, mapDispatchToProps)(Sellheader);
