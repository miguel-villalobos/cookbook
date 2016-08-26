var React = require('react');
var AppBar = require('material-ui/appbar');
var LeftNav = require('material-ui/drawer');
var MenuItem = require('material-ui/menu-item');
var Table = require('material-ui/table/table');
var TableHeader = require('material-ui/table/tableheader');
var TableRow = require('material-ui/table/tablerow');
var TableHeaderColumn = require('material-ui/table/tableheadercolumn');
var TableRowColumn = require('material-ui/table/tablerowcolumn');
var TableBody = require('material-ui/table/table-body');

var Header = React.createClass({
	menuItems : [
	  { route: 'content', text: 'Home' },
	  { route: 'about', text: 'About' },
	  ],
	leftTab : function (e) {
		this.refs.leftNav.toggle();
	},
    render: function () {

        return (
        	<div>
            <AppBar
  				title="Avantica Cookbook"
  				iconClassNameRight="muidocs-icon-navigation-expand-more"
  				onLeftIconButtonTouchTap={this.leftTab}
  				 />
  			<LeftNav ref="leftNav" docked={false} menuItems={this.menuItems} />
  			</div>

        );
    }
});

var DetailHeader = React.createClass({
	leftTab : function (e) {
		window.history.back();
	},
    render: function () {

        return (
        	<div>
            <AppBar
  				title="Avantica Cookbook"
  				iconClassNameLeft="muidocs-icon-navigation-back"
  				onLeftIconButtonTouchTap={this.leftTab}
  				 />
  			</div>
        );
    }
});

var Toolbar = require('material-ui/lib/toolbar/toolbar');
var ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
var DropDownMenu = require('material-ui/lib/drop-down-menu');
var TextField= require('material-ui/lib/text-field');
var SearchBar = React.createClass({
    filterOptions : [
	  { payload: '1', text: 'All recipes' },
	  { payload: '2', text: 'Pasta' },
	  { payload: '3', text: 'Meat' },
	  { payload: '4', text: 'Salad' },
	  { payload: '5', text: 'Dessert' },
	],
    getInitialState: function() {
        return {searchKey: ""};
    },
    searchHandler: function(event) {
        var searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        this.props.searchHandler(searchKey);
    },
		catHandler: function(e, selectedIndex, menuItem){
			var searchKey = menuItem.text;
			this.setState({searchKey: ""});
			this.props.catHandler(searchKey);
		},
    render: function () {
        return (
  			<Toolbar>
			  <ToolbarGroup>
			    <DropDownMenu
			    	menuItems={this.filterOptions}
						onChange={this.catHandler} />
			    <TextField
			    	type="search"
  					hintText="Search"
  					value={this.state.symbol}
  					onChange={this.searchHandler}/>
			  </ToolbarGroup>
			</Toolbar>
        );
    }
});

var ListItem = require('material-ui/lib/lists/list-item');
var RecipeListItem = React.createClass({
		gotoRecipe : function() {
			window.location.href="#recipes/"+this.props.recipe.id;
		},
    render: function () {
        return (
            <ListItem primaryText={this.props.recipe.name} secondaryText={"Chef " + this.props.recipe.chef}
						onTouchTap={this.gotoRecipe}/>
        );
    }
});

var List = require('material-ui/lib/lists/list');
var RecipeList = React.createClass({

    render: function () {
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
});

var HomePage = React.createClass({
    getInitialState: function() {
        return {employees: []}
    },
		catHandler:function(key) {
			console.log("homepage.cathandler find by cat "+key);
				this.props.service.findByCategory(key).done(function(result) {
						this.setState({searchKey: "", employees: result});
				}.bind(this));
		},
    searchHandler:function(key) {
        this.props.service.findByName(key).done(function(result) {
            this.setState({searchKey: key, employees: result});
        }.bind(this));
    },
    componentDidMount : function() {
    	    	this.searchHandler("");
    },
    render: function () {
        return (
            <div>
                <Header text="Avantica Cookbook"/>
                <SearchBar searchHandler={this.searchHandler} catHandler={this.catHandler}/>
                <RecipeList recipes={this.state.employees} title="All recipes"/>
            </div>
        );
    }
});

var Paper = require('material-ui/lib/paper');
var RecipePage = React.createClass({
    getInitialState: function() {
        return {recipe: {}};
    },
    componentDidMount: function() {
        this.props.service.findById(this.props.recipeId).done(function(result) {
            this.setState({recipe: result});
        }.bind(this));
    },
    render: function () {
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
});

var IngredientTable = React.createClass({
	render : function() {
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
});

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
