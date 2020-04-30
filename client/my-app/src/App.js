import React from 'react';
import './App.css';

import client from "./client";
import {ApolloProvider} from "@apollo/react-hooks"
import TodoList from "./components/TodoList";

function App() {
  return (
    <ApolloProvider client={client}>

      <TodoList/>

    </ApolloProvider>
  );
}

export default App;
