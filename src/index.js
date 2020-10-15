import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';
import client from './app/configureApollo';
import configureStore from './app/configureStore';
import App from './app/App';

import './styles/normalize.css';
import './styles/typography.css';

const store = configureStore();
console.log(store.getState())

ReactDOM.render(
  <ApolloProvider
    client={client}
    store={store}
  >
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
