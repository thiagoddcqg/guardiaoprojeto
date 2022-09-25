import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from "./pages/app";
import Principios from "./pages/principios";
import Resultados from "./pages/resultados";
import Referencias from "./pages/referencias";
import Referencias1 from "./pages/referencias-1";
import Questionario from "./pages/questionario";
import Links from "./pages/links";
import Erro404 from "./pages/erro-404";

ReactDOM.render((
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/principios" component={Principios} />
        <Route exact path="/resultados" component={Resultados} />
        <Route exact path="/questionario" component={Questionario} />
        <Route exact path="/referencias" component={Referencias} />
        <Route exact path="/referencias-1" component={Referencias1} />
        <Route exact path="/links" component={Links} />
        <Route exact path="/erro-404" component={Erro404} />
        <Redirect from="*" to="/erro-404" />
      </Switch>
  </BrowserRouter>
  ),
  document.getElementById('root')
);

serviceWorker.unregister();