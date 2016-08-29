import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem'

export class DrawerMenuItem extends React.Component {
  gotoRecipe (e) {
<<<<<<< HEAD
    console.log(this.props.route.route);
=======
>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3
			window.location.href=this.props.route.route;
	}
  render () {
    return (
      <MenuItem key={this.props.mkey} primaryText={this.props.route.text}
        onTouchTap={this.gotoRecipe.bind(this)}/>
    );
  }
}
