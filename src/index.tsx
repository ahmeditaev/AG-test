import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {Provider} from "react-redux";
import {store, persistor} from "./redux/configureStore";
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);