import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { initSocket } from "../api/ws/socketController";
import configureStore from "./configureStore";
import App from "../App";

const history = createBrowserHistory()

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: initSocket(configureStore()),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <Router history={history}>
          <App />
          </Router>
      </Provider>
    );
  }
}

export default Setup;
