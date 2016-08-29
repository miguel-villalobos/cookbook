import React, {Component} from 'react';
import Paper from 'material-ui/paper';
import {DetailHeader} from './views/DetailHeader'
import {IngredientTable} from './views/IngredientTable'
<<<<<<< HEAD

export class RecipePage extends Component {
=======
import recipeService from './data/data'

const Service = recipeService();

export class RecipeDetailPage extends Component {
>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3
    constructor (props){
      super (props);
      this.state = {recipe: {}};
    }
    componentDidMount () {
<<<<<<< HEAD
        this.props.service.findById(this.props.params.id).done(function(result) {
=======
        Service.findById(this.props.params.id).done(function(result) {
>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3
            this.setState({recipe: result});
        }.bind(this));
    }
    render () {
        return (
            <div>
                <DetailHeader text="Recipe"/>
              	<h3>{this.state.recipe.name}</h3>
              	<p> By Chef  {this.state.recipe.chef}</p>
								<Paper zDepth={3} style={{padding: 10}}>
									<hr/>
									<h3>Ingredients:</h3>
									<IngredientTable ingredients={this.state.recipe.ingredients} />
									<hr/>
									<h3>Preparation:</h3>
                	<p>{this.state.recipe.preparation}</p>
								</Paper>
            </div>
        );
    }
}
