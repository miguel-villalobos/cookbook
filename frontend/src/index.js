import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Main} from './app/main';
import {About} from './app/about';
import {RecipeListPage} from './app/RecipeListPage'
import {RecipeDetailPage} from './app/RecipeDetailPage'

import './index.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const Users = ({ children }) => (
  <div>
    <h2>Users</h2>
    {children}
  </div>
)

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Route path="/" component={RecipeListPage}>
        <Route path="recipes" component={Users}>
          <IndexRoute component={RecipeListPage}/>
          <Route path=":id" component={RecipeDetailPage} />
        </Route>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
