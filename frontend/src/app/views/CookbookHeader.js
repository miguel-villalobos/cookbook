import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {DrawerMenuItem} from './DrawerMenuItem'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const menuItems = [
  { key:"1", route: '', text: 'Home' },
  { key:"2", route: 'about', text: 'About' },
];

export class CookbookHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleToggle () {
    this.setState({open: !this.state.open});
  };


  render () {

    var func = this.handleToggle;

    var drawerItems = menuItems.map(
      function(route, i){
        return (
          <DrawerMenuItem key={i} mkey={i} route={route} fasha={this} onTouchFunction={func}/>
        )
      }
    );

    return (
    	<div>
          <AppBar
      				title="Avantica Cookbook"
      				iconClassNameRight="muidocs-icon-navigation-expand-more"
      				onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
  				 />
           <Drawer ref="leftNav" open={this.state.open}>
            {drawerItems}
           </Drawer>
		  </div>
    );
  }
}

CookbookHeader.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
