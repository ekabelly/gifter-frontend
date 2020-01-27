import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import { createLogger } from 'redux-logger';
import err from './middlewares/err';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
  key: 'root',
  storage
}
 
const persistedReducer = persistReducer(persistConfig, reducers)
 
export default () => {
  const store = createStore(persistedReducer, compose(applyMiddleware(thunk), applyMiddleware(createLogger(), err)));
  const persistor = persistStore(store)
  return { store, persistor }
}