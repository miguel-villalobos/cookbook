import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export class DetailHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  goBack () {
    window.history.back();
  };


  render () {

    return (
    	<div>
          <AppBar
      				title="Avantica Cookbook"
      				iconClassNameRight="muidocs-icon-navigation-expand-more"
      				onLeftIconButtonTouchTap={this.goBack.bind(this)}
  				 />
		  </div>
    );
  }
}

DetailHeader.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
