import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './lib/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import GlobalModal from './components/ConfirmationModal/GlobalModal';
import GlobalAlert from './components/Alerts/GlobalAlert';

const persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <GlobalAlert />
        <GlobalModal />
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);


reportWebVitals();
