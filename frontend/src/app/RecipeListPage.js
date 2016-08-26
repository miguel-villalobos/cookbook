import React, {Component} from 'react';
import {CookbookHeader} from './views/CookbookHeader'
import {SearchBar} from './views/SearchBar'
import {RecipeList} from './views/RecipeList'
import {RecipeListItem} from './views/RecipeListItem'
import recipeService from './data/data'

var Service = recipeService();

export class RecipeListPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
    }
  }

  catHandler (key) {
    console.log("homepage.cathandler find by cat "+key);
    Service.findByCategory(key).done(function(result) {
      this.setState({searchKey: "", recipes: result});
    }.bind(this));
  }
  searchHandler (key) {
    Service.findByName(key).done(function(result) {
      this.setState({searchKey: key, recipes: result});
    }.bind(this));
  }
  componentDidMount  () {
    this.searchHandler("");
  }
  render () {
    var recipe = {name:"qwerty", chef:"chef"};
    return (
      <div>
        <CookbookHeader />
        <RecipeList recipes={this.state.recipes} title="All recipes"/>
      </div>
    );
  }
};
