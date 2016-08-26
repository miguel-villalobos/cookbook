import React, {Component} from 'react';
import List from 'material-ui/list/list';
import {RecipeListItem} from './RecipeListItem';

export class RecipeList extends React.Component {
    render () {
        var items = this.props.recipes.map(function (recipe) {
            return (
                <RecipeListItem key={recipe.id} recipe={recipe} />
            );
        });
        return (
            <List>
                {items}
            </List>
        );
    }
}

export default RecipeList;
