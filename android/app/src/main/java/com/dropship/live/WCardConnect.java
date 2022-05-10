//package com.wallpon.agent.business;
//import android.util.Log;
//
//import androidx.annotation.NonNull;
//
//import com.bolt.consumersdk.CCConsumer;
//import com.bolt.consumersdk.CCConsumerTokenCallback;
//import com.bolt.consumersdk.domain.CCConsumerAccount;
//import com.bolt.consumersdk.domain.CCConsumerCardInfo;
//import com.bolt.consumersdk.domain.CCConsumerError;
//import com.facebook.react.bridge.Callback;
//import com.facebook.react.bridge.ReactApplicationContext;
//import com.facebook.react.bridge.ReactContextBaseJavaModule;
//import com.facebook.react.bridge.ReactMethod;
//
//public class WCardConnect  extends ReactContextBaseJavaModule implements CCConsumerTokenCallback {
//    WCardConnect(ReactApplicationContext context) {
//        super(context);
//    }
//
//    @NonNull
//    @Override
//    public String getName() {
//        return "WCardConnect";
//    }
//
//    @ReactMethod
//    public void initialize(String cardsecureUrl) {
//        CCConsumer.getInstance().getApi().setEndPoint(cardsecureUrl);
//        Log.d("WCardConnect", "initialized with   : "+cardsecureUrl);
//    }
//    @ReactMethod
//    public void generatePaymentToken(String cardNumber, String expirationDate, String cvv, Callback tokenCallback) {
//        CCConsumerCardInfo ccConsumerCardInfo=new CCConsumerCardInfo();
//        ccConsumerCardInfo.setCardNumber(cardNumber);
//        ccConsumerCardInfo.setExpirationDate(expirationDate);
//        ccConsumerCardInfo.setCvv(cvv);
//        CCConsumer.getInstance().getApi().generateAccountForCard(ccConsumerCardInfo, new CCConsumerTokenCallback() {
//            @Override
//            public void onCCConsumerTokenResponseError(CCConsumerError error) {
//                tokenCallback.invoke(error.getResponseMessage());
//            }
//
//            @Override
//            public void onCCConsumerTokenResponse(CCConsumerAccount consumerAccount) {
//                tokenCallback.invoke(consumerAccount.getToken());
//            }
//        });
//        Log.d("generatePaymentToken", "cardNumber: " + cardNumber
//                + " and expirationDate: " + expirationDate+" CVV :"+cvv);
//    }
//
//    @Override
//    public void onCCConsumerTokenResponseError(@NonNull CCConsumerError ccConsumerError) {
//        //An error occurred trying to tokenize the data
//        //Notify user of error
//        Log.d("CalendarModule", "Error in : onCCConsumerTokenResponseError :" +ccConsumerError.getResponseMessage());
//    }
//
//    @Override
//    public void onCCConsumerTokenResponse(@NonNull CCConsumerAccount ccConsumerAccount) {
//        Log.d("CalendarModule", "Error in : onCCConsumerTokenResponse :" +ccConsumerAccount);
//    }
//}
