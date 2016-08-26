import React, {Component} from 'react';
import Toolbar from 'material-ui/toolbar/toolbar';
import ToolbarGroup from 'material-ui/toolbar/toolbargroup';
import DropDownMenu from 'material-ui/dropdownmenu';
import TextField from 'material-ui/textfield';

export class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {searchKey: "",
      filterOptions : [
        { payload: '1', text: 'All recipes' },
        { payload: '2', text: 'Pasta' },
        { payload: '3', text: 'Meat' },
        { payload: '4', text: 'Salad' },
        { payload: '5', text: 'Dessert' },
      ]};
  }
  searchHandler (event) {
    var searchKey = event.target.value;
    this.setState({searchKey: searchKey});
    this.props.searchHandler(searchKey);
  }
  catHandler (e, selectedIndex, menuItem){
    var searchKey = menuItem.text;
    this.setState({searchKey: ""});
    this.props.catHandler(searchKey);
  }
  render () {
    return (
      <Toolbar>
        <ToolbarGroup>
          <DropDownMenu
            //menuItems={this.state.filterOptions}
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
}

export default SearchBar;
