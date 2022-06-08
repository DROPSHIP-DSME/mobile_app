const baseUri = `http://3.144.121.158:7888/v1`; //STATGING URL
// const baseUri = `https://api.wallpon.com/v1`; //PRODUCTION URL   `http://3.134.6.186:7889/v1`
// const baseUri = `https://8fd71b19882a.ngrok.io/v1`;
// const baseUri = `http://localhost/v1`
//export const socketUri = `http://3.134.6.186:8332`; 
export const socketUri = `http://54.147.39.81:7858`; 


const api = {
  baseUri,
  checkEmailAddress: `${baseUri}/user/byEmail`,
  login: `/auth/login`,
  shopsignupphone:`/auth/loginwithphone`,
  signup: `/auth/signup`,
  getchanneltoken: `/users/getchanneltoken`,
  createshop: `/shops/createOrUpdateShop`,
  verifyOTP: `/auth/verifyOTP`,
  resendOTP: `/auth/resendOTP`,
  resetPassword: `/auth/resetPassword`,
  forgotPassword: `/auth/forgotPassword`,
  cartlist: `/users/cartlist`,
  cartdata: `/shops/getcartList`,
  cartprice: `/shops/getcartprice`,
  updatewatchlist: `/shops/updatewatchlist`,
  getwatchlist: `/shops/getwatchlist`,
  gettopsell:`/shops/topsellingproduct`,
  countrylist:`/shops/getallcountry`,
  getAllshop: `/shops/getAllShops`,
  getselldeshboard:`/shops/selldashboard`,
  branddetails:`/shops/getBrandDetails`,
  Brandslist:`/shops/getAllBrands`,
  SearchBrandslist:`/shops/searchAllBrands`,
  searchlistdata:`/shops/getsearchlist`,
  searchlistitmes:`/shops/searchitems`,
  getalleventlist:`/shops/getallevent`,
  gettopcountry:`/shops/topsellingcountry`,
  uploadproductpic:`/shops/uploadProductImage`,
  createbrand: `/shops/createOrUpdateBrand`,
  createproduct: `/shops/createOrUpdateProduct`,
  createproduct2: `/shops/createOrUpdateProduct`,
  createproduct3: `/shops/addtoshopProduct`,
  support:`/shops/asksupport`,
  postcomment:`/shops/postcommentsOnLiveEvent`,
  chekout:`/shops/checkout`,
  saveaddress:`/shops/saveaddress`,
  savepaymentaddress:`/shops/savecard`,
  getuserCard:`/shops/getuserCard`,
  deletecardaddress:`/shops/deleteCard`,
  createcategory: `/shops/createOrUpdateCategory`,
  createcategoryproduct:`/shops/getAllCategoryProducts`,
  getAllcategory: `/shops/getAllCategory`,
  getlistproduct: `/shops/getAllProducts`,
  getsearchproduct: `/shops/getsearchproduct`,
  getlistproductdetails: `/shops/getnewProductDetails`,
  getsupportlist:`/shops/supportlist`,
  getprofileuser:`/shops/getUserProfile `,
  getuseraddress:`/shops/getuserAddress`,
  getincomingtlist:`/shops/incommingorderList`,
  updateorderstatus:`/shops/updateorderstatus`,
  getorderdetail:`/shops/orderDetail`,
  getLiveCustomer:`/shops/getLiveEventByCustomer`,
  getLivecommentCustomer:`/shops/getcommentsOnLiveEvent`,
  getprocesstlist:`/shops/processedorderList`,
  cartadd: `/shops/addtocart`,
  liveeventdetail:`/shops/liveevents`,
  addItemInEvent:`/shops/addItemInEvent`,
  increcartlist: `/shops/updatecartList`,
  deletedata: `/shops/deletecartList`,
  deleteaddress:`/shops/deleteAddress`,
  removedata: `/shops/removeItemInEvent`,
  removecategory:`/shops/removecategory`,
  schuleEvent:`/shops/scheduleEvent`,
  startEvent:`/shops/startEvent`,
  updateleftcount:`/shops/updateleftcount`,
  updatediscount:`/shops/updatediscount`,
  updateprofile:`/shops/updateProfilepicture`,
  newprofile:`/shops/updateProfile`,
  getchannelAudiance:`/shops/getchannelAudiance`,
  updateAudianceCount:`/shops/updateAudianceCount`,
  updatepassword:`/auth/resetPassword`,
  getbrandName:`/shops/getbrandName`,
  getchannelbrandName:`/shops/getchannelbrandName`,
  insertOrUpdateVendor: `/users/insertOrUpdateVendor`,
  sendResetLink: `/users/sendingEmail`,
  createOrUpdateStore: `/stores/createOrUpdateStore`,
  uploadUtilityBill: `/stores/uploadUtilityBill`,
  uploadStoreFacade: `/stores/uploadStoreFacade`,
  getVendorsList: `/users/getVendorsList`,
  shopproduct:`/shops/getShopProducts`,
  shopsellcount:`/shops/getShopSellCount`,
  getVendor: `/users/getVendor`,
  acceptVendor: `/notifications/acceptVendor`,
  updateVendor: `/users/updateVendor`,
  createOrUpdateCoupon: `/coupons/createOrUpdateCoupon`,
  getCoupons: `/coupons/getCoupons`,
  redeemCoupon: `/coupons/insightCoupon`,
  getRedeemCouponTracking: `/coupons/getRedeemCouponTracking`,
  addUserAccount: `/userAccount/addUserAccount`,
  getAccountList: `/userAccount/getUserAccount`,
  editUserAccount: `/userAccount/editUserAccount`,
  getBanks: `/banks/getBank`,
  businessType: `/businessType/getBusinessType`,
  getSubscroptionPlan: `/plan/getPlans`,
  purchaseSubscriptionByVendor: `/subscriptions/purchaseSubscriptionByVendor`,
  purchaseSubscription: `/subscriptions/validateReceipt`,
  subscriptionStatus: `/subscriptions/subscriptionStatus`,
  paymentGateway: `/users/paymentGateway`,
  paymentGatewayAuthorization: `/users/paymentGatewayAuthorization`,
  getTransactions: `/subscriptions/getTransactions`,
  getCommissionsListOfSalesman: `/agentCommissions/getCommissionsListOfSalesman`,
  editUser:`/users/editUser`,
  deleteUser:`/users/deleteUser`,
  getlivestreamrecap:`/shops/livestreamrecap`,
  postratingnew:`/rating/addrating`,
  getpostratingnew:`/rating/getrating`,
};

export default api; 
