import React from 'react';
import Home from './pages/Home';
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";
import translate from 'counterpart';
import "./styles/index.scss";
import {fr} from './config/languages/fr';

translate.registerTranslations('fr', fr)
translate.setLocale('fr');

export const history = createBrowserHistory();

function App() {
  return (
      <div className="App">
          <Router history={history}>
              <Route exact path="/" component={Home}/>
          </Router>
      </div>
  );
}

export default App;
