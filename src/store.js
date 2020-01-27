import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import { createLogger } from 'redux-logger';

import err from './middlewares/err';

export default createStore(reducers, compose(applyMiddleware(thunk), applyMiddleware(createLogger(), err)));