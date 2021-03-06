import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import route from "@Routers/index"
import IndexApp from "./containers";
import "./styles/app.css";
import "./styles/base.scss"

import configureStore from "@Redux/configureStore";

const store = configureStore();
const rootElement = document.getElementById('root') as HTMLElement

// store.subscribe(() => {
//   console.log(store.getState());
// })

ReactDOM.render(
  <Provider store={store} >
    <IndexApp />
  </Provider>,
  rootElement
);
