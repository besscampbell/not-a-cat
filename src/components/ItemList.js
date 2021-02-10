import React from "react";
import Listing from "./Listing";

function ItemList(props) {
  return (
    <>
      <hr />
      {props.itemList.map((listing, index) => 
        <Listing name={listing.name}
        description={listing.description}
        quantity={listing.quantity} 
        key={index}/>
      )}
    </>
  );
}

export default ItemList;