package com.dropship.live;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle; // here

import com.facebook.react.ReactActivity;


//import com.bolt.consumersdk.CCConsumerTokenCallback;
//import com.bolt.consumersdk.domain.CCConsumerAccount;
//import com.bolt.consumersdk.domain.CCConsumerError;

//public class MainActivity extends ReactActivity implements CCConsumerTokenCallback{
public class MainActivity extends ReactActivity{

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

@Override
    protected void onCreate(Bundle savedInstanceState) {
      //  SplashScreen.show(this, R.style.SplashStatusBarTheme);
        super.onCreate(savedInstanceState);
        //RNBootSplash.init(R.drawable.bootsplash, MainActivity.this);
    }

  @Override
  protected String getMainComponentName() {
    return "SalesmanStoreOwner";
  }

}
