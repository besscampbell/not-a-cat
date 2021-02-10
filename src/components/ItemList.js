import React from "react";
import Listing from "./Listing";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <>
      <hr/>
      {props.itemList.map((listing, index) => 
        <Listing name={listing.name}
        description={listing.description}
        quantity={listing.quantity} 
        key={index}/>
      )}
    </>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
}

export default ItemList;