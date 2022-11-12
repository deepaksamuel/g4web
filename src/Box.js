import { MDBInput } from "mdb-react-ui-kit";
import { MDBInputGroup } from "mdb-react-ui-kit";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Container, Divider, Grid, Header, Icon } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Label, Menu, Table } from "semantic-ui-react";
import MaterialSearchSelection from "./Materials";
export default function Box() {
  return (
    <div>
      <Table compact="true" size="small" singleLine="true">
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="L" size="mini" />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="B" size="mini" />
            </Table.Cell>
            <Table.Cell>
              <Input type="text" fluid="true" placeholder="H" size="mini" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
