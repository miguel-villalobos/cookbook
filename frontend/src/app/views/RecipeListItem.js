import React, {Component} from 'react';
import ListItem from 'material-ui/list/listitem';

export class RecipeListItem extends React.Component {
		gotoRecipe () {
			window.location.href="#recipes/"+this.props.recipe.id;
		};

    render () {
        return (
            <ListItem primaryText={this.props.recipe.name} secondaryText={"Chef " + this.props.recipe.chef}
						onTouchTap={this.gotoRecipe.bind(this)}/>
        );
    }
}
