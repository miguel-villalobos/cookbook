import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import {Router, Route, browserHistory} from 'react-router';
=======
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3

import {Main} from './app/main';
import {About} from './app/about';
import {RecipeListPage} from './app/RecipeListPage'
import {RecipeDetailPage} from './app/RecipeDetailPage'

import './index.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

<<<<<<< HEAD
=======
const Users = ({ children }) => (
  <div>
    <h2>Users</h2>
    {children}
  </div>
)

>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3
ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={RecipeListPage}>
<<<<<<< HEAD
        <Route path="/recipes/:id" component={RecipeDetailPage} />
      </Route>
      <Route path="about" component={About}/>
=======
        <Route path="recipes" component={Users}>
          <IndexRoute component={RecipeListPage}/>
          <Route path=":id" component={RecipeDetailPage} />
        </Route>
        <Route path="about" component={About}/>
      </Route>
>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
