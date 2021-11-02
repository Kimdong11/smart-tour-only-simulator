import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './navigation/Root';
import {ApolloProvider} from '@apollo/client';
import client from './apllo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
