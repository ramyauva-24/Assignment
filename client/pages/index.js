import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { client } from "../lib/with-apollo";
import { ApolloProvider } from '@apollo/client';
import PersonComponent from '../components/Name';

const NavStyle = {
  backgroundColor: "#e9ecef",
  borderRadius: "5px",
  padding: "5px",
  justifyContent: "center"

}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <nav className="navbar sticky-top navbar-light bg-light">
          <div className="container-fluid bg-light" style={NavStyle}>
            <h1 className="navbar-brand">Assignment</h1>
          </div>
        </nav>
        <PersonComponent />
      </div>
    </ApolloProvider>
  );
}

export default App;
