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
			"https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&h=760&q=80",
		altText: "Slide 2",
		caption: "Slide 2",
		header: "Slide 2 Header"
	},
	{
		src:
			"https://images.unsplash.com/photo-1511227682637-ddb98c43c42c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&h=1088&q=80",
		altText: "Slide 3",
		caption: "Slide 3",
		header: "Slide 3 Header"
	}
];

const Carou = () => <UncontrolledCarousel items={items} />;

export default Carou;
