import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/Store'
import RootNavigation from './src/route/RootNavigation';
import axios from 'axios';
import api from './src/common/Api';
import SplashScreen from 'react-native-splash-screen';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import tw from 'twrnc';

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