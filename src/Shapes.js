import React from "react";
import { Tab } from "semantic-ui-react";
import Box from "./Box.js";
const panes = [
  {
    menuItem: "Box",
    render: () => (
      <Tab.Pane>
        {" "}
        <Box />{" "}
      </Tab.Pane>
    )
  },
  {
    menuItem: "Sphere",
    render: () => (
      <Tab.Pane>
        <Box />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Cylinder",
    render: () => (
      <Tab.Pane>
        <Box />
      </Tab.Pane>
    )
  }
];

const Shapes = () => <Tab menu={{ pointing: true }} panes={panes} />;

export default Shapes;
