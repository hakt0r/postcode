import React       from 'react';
import ReactDOM    from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import TopBar   from "./TopBar";
import Normal   from "./Normal";
import Reverse  from "./Reverse";
import Sortable from "./Sortable";

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://bender.hktr.de/postcode/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider {...{client}}>
      <CssBaseline/>
      <BrowserRouter>
        <TopBar/>
        <Switch>
          <Route path="/sortable" component={Sortable}/>
          <Route path="/reverse"  component={Reverse}/>
          <Route path="/"         component={Normal}/>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
