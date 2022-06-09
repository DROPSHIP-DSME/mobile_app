import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/Store'
import RootNavigation from './src/route/RootNavigation';
import axios from 'axios';
import api from './src/common/Api';
import SplashScreen from 'react-native-splash-screen';
import GlobalFont from 'react-native-global-font';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

componentDidMount(); {
   let fontName = 'YourFontName'
   GlobalFont.applyGlobal(fontName)
}

const App = () => {
  axios.defaults.baseURL = api.baseUri; // BASE URL
    useEffect(() => {
      SplashScreen.hide();
  }, []);

    return (
      <TailwindProvider utilities={utilities}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </TailwindProvider>
    );

};

export default App;
