import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'components/App.css';

const App = () => (
  <Router>
    <header>
      <nav>
      </nav>
    </header>
    <main>
      <Switch>
        <Route path="/">
          <h1>Products</h1>
          <ul>
            <li>Smartphone</li>
            <li>Notebook</li>
            <li>Gamer Keyboard</li>
          </ul>
        </Route>
      </Switch>
    </main>
    <footer>
    </footer>
  </Router>
);

export default App;
