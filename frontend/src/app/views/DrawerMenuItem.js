import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem'

export class DrawerMenuItem extends React.Component {
  gotoRecipe (e) {
    console.log(this.props.route.route);
			window.location.href=this.props.route.route;
	}
  render () {
    return (
      <MenuItem key={this.props.mkey} primaryText={this.props.route.text}
        onTouchTap={this.gotoRecipe.bind(this)}/>
    );
  }
}
