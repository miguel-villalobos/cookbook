import React, {Component} from 'react';
import {IngredientTableItem} from './IngredientTableItem'

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
