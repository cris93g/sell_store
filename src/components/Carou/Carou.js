import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://images.unsplash.com/photo-1498511225742-7831d53e64b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header"
  },
  {
    src:
      "https://images.unsplash.com/40/10294420724_0300cf921d_o.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src:
      "https://images.unsplash.com/photo-1495819427834-1954f20ebb97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  }
];

const Carou = () => <UncontrolledCarousel items={items} />;

export default Carou;
