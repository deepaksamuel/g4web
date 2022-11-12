import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Property from "./Property.js";
import Objects from "./Objects.js";
import Visualization from "./Visualization.js";

const Layout = () => (
  <Grid celled style={{ height: "100vh" }}>
    <Grid.Row>
      <Grid.Column width={2}>
        <Objects />
      </Grid.Column>
      <Grid.Column width={11}>
        <Visualization />
      </Grid.Column>
      <Grid.Column width={3}>
        <Property />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Layout;
