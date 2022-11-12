import React from "react";
import { List } from "semantic-ui-react";

const Objects = () => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name="box" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Box 1</List.Header>
        <List.Description as="a">Air</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="box" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Cylinder 1</List.Header>
        <List.Description as="a">Hydrogen</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="box" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Sphere 1</List.Header>
        <List.Description as="a">Vaccum</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default Objects;
