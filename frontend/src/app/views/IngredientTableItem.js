var React = require('react');

var IngredientTableItem = React.createClass({
	render : function() {
		return (
			<TableRow>
				<TableRowColumn>{this.props.ingredient.ingredient}</TableRowColumn>
	      <TableRowColumn>{this.props.ingredient.amount}</TableRowColumn>);
			</TableRow>
		);
	}
});

export default IngredientTableItem;
