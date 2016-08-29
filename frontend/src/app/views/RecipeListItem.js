import React, {Component} from 'react';
import ListItem from 'material-ui/list/listitem';
<<<<<<< HEAD

export class RecipeListItem extends React.Component {
		gotoRecipe () {
			window.location.href="#recipes/"+this.props.recipe.id;
=======
import {IndexLink} from 'react-router';

const ACTIVE = { color: 'red' }

export class RecipeListItem extends React.Component {

		gotoRecipe () {
			window.location.href="recipes/"+this.props.recipe.id;
>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3
		};

    render () {
        return (
<<<<<<< HEAD
            <ListItem primaryText={this.props.recipe.name} secondaryText={"Chef " + this.props.recipe.chef}
						onTouchTap={this.gotoRecipe.bind(this)}/>
=======
					<ListItem primaryText={this.props.recipe.name} secondaryText={"Chef " + this.props.recipe.chef}
					onTouchTap={this.gotoRecipe}/>
>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3
        );
    }
}
