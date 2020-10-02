import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const middleware = (() => {
    let _middleware: any;

    if (
      process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test'
    ) {
      _middleware = composeWithDevTools(applyMiddleware(thunk));
    } else {
      _middleware = compose(applyMiddleware(thunk));
    }

    return _middleware;
  })();
  return createStore(rootReducer, middleware);
};

export default configureStore;
