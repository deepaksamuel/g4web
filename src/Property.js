import { MDBInput } from "mdb-react-ui-kit";
import { MDBInputGroup } from "mdb-react-ui-kit";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Container, Divider, Grid, Header, Icon } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Label, Menu, Table } from "semantic-ui-react";
import MaterialSearchSelection from "./Materials";
import Shapes from "./Shapes.js";
export default function Property() {
  return (
    <div>
      <Table compact="true" size="small" singleLine="true">
        <Table.Body>
          <Table.Row>
            <Table.Cell width="16" float="left">
              <Shapes />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table compact="true" size="small" singleLine="true">
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">Pos (cm)</Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="X" size="mini" />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="Y" size="mini" />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="Z" size="mini" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Trans (cm)</Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="X" size="mini" />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="Y" size="mini" />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="Z" size="mini" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Rot (deg)</Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="Phi" size="mini" />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="Theta" size="mini" />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="Psi" size="mini" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table compact="true" size="small" singleLine="true">
        <Table.Body>
          <Table.Row>
            <Table.Cell width="16" float="left">
              <MaterialSearchSelection />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
