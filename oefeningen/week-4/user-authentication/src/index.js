import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const { REACT_APP_HYPGRAPH_URL } = process.env

const client = new ApolloClient({
	uri: REACT_APP_HYPGRAPH_URL,
	cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
