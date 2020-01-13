import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from './reducers/reducers'

// const store = createStore(
// rootReducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
