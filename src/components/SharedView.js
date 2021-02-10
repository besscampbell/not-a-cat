import React from 'react';
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

class SharedView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0
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

  render(){
      let currentlyVisibleState = null;
      if (this.state.visibleView === 0) {
        currentlyVisibleState = null
      } else if (this.state.visibleView === 1) {
        currentlyVisibleState = <ItemList />
      } else if (this.state.visibleView === 2) {
        currentlyVisibleState = <NewItemForm />
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