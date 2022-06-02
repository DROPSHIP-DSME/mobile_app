import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/Store'
import RootNavigation from './src/route/RootNavigation';
import axios from 'axios';
import api from './src/common/Api';
import {TailwindProvider} from 'tailwind-rn';
import SplashScreen from 'react-native-splash-screen';
import utilities from './tailwind.json';

const App = () => {
  axios.defaults.baseURL = api.baseUri; // BASE URL
  useEffect(() => {
    SplashScreen.hide();
}, []);
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );

  <TailwindProvider utilities={utilities}>
		<MyComponent />
	</TailwindProvider>
};

export default App;
