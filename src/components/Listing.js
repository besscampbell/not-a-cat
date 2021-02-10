import React from "react";
import PropTypes from "prop-types";

function Listing(props){
  var quantity = props.quantity;
  if (quantity <= 0) {
    return (
      <>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <h4>Out of stock</h4>
      </>
    )
  } else {
    return (
      <>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <h4>{props.quantity}</h4>
      </>
    )
  }
}

Listing.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Listing;