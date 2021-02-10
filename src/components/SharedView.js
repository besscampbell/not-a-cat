import React from 'react';
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

class SharedView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0,
      masterItemList: [],
      selectedItem: null
    };
  }

  listClick = () => {
    this.setState({
      visibleView: 1
    });
  }

  newItemClick = () => {
    this.setState({
      visibleView: 2
    });
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList,
                  visibleView: 1 });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  render(){
      let currentlyVisibleState = null;
      if (this.state.selectedItem != null) {
        currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} />
      } else if (this.state.visibleView === 0) {
        currentlyVisibleState = null
      } else if (this.state.visibleView === 1) {
        currentlyVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem}/>;
      } else if (this.state.visibleView === 2) {
        currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      }

      return (
        <>
          <button onClick={this.listClick}> List of Stuff </button>
          <button onClick={this.newItemClick}> Create new Item </button>
          {currentlyVisibleState}
        </>
    );
  }
  
}

export default SharedView;