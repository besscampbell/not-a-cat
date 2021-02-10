import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item } = props;

  return (
    <>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <h3>{item.description}</h3>
      <h3>{item.quantity}</h3>
      <hr />
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;
