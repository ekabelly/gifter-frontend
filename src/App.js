import React from 'react';
import './App.css';
import './assets/style/style.scss';
import Main from './views/Main';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
