import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
	{
		src:
			"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=100",
		altText: "Slide 1",
		caption: "Slide 1",
		header: "Slide 1 Header"
	},
	{
		src:
			"https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=2089&q=80",
		altText: "Slide 2",
		caption: "Slide 2",
		header: "Slide 2 Header"
	}
	// {
	// 	src:
	// 		"https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1879&q=80",
	// 	altText: "Slide 3",
	// 	caption: "Slide 3",
	// 	header: "Slide 3 Header"
	// }
];

const Carou = () => <UncontrolledCarousel items={items} />;

export default Carou;
