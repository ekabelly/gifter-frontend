import React from 'react';
import './App.css';
import './assets/style/style.scss';
import Main from './views/Main';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import storeConfiguration from './store';
const { store, persistor } = storeConfiguration();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Main />
      </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
