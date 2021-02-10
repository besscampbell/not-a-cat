import React from 'react';
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

class SharedView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0,
      masterItemList: []
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

  render(){
      let currentlyVisibleState = null;
      if (this.state.visibleView === 0) {
        currentlyVisibleState = null
      } else if (this.state.visibleView === 1) {
        currentlyVisibleState = <ItemList itemList={this.state.masterItemList} />;
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