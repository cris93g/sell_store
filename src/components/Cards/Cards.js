import React from "react";

const Cards = ({ item, addToCart }) => (
	<div
		className="card"
		style={{ height: "200px", width: "200px", border: "1px solid black" }}
	>
		<h1>{item.name}</h1>
		<span>Description</span>
		{/* <button onClick={() => addToCart(product)}>Add To Cart</button> */}
	</div>
);

export default Cards;
