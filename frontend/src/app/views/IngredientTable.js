import React, {Component} from 'react';
import {IngredientTableItem} from './IngredientTableItem'
<<<<<<< HEAD
=======
import {Table, TableHeader, TableBody, TableRow, TableHeaderColumn} from 'material-ui'
>>>>>>> ab8f03a72982fb20d70dd09b8827b633e75dc3d3

export class IngredientTable extends Component {
	render () {
		var prop = this.props.ingredients;
		var ingredients = [];
		if(prop && Array.isArray(prop)){
			ingredients = Array.from(prop);
		}
		var items = ingredients.map(function (ingredient) {
      return (
          <IngredientTableItem ingredient={ingredient} />
      );
		});
		return (
  		<div>
  			<Table>
  				<TableHeader displaySelectAll={false}>
  					<TableRow>
  						<TableHeaderColumn>Ingredient</TableHeaderColumn>
  						<TableHeaderColumn>Amount</TableHeaderColumn>
  					</TableRow>
					</TableHeader>
					<TableBody>
						{items}
					</TableBody>
				</Table>
  		</div>
  	);
	}
}
