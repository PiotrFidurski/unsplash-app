import * as React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

interface Props {}

export const SelectFolder: React.FC<Props> = () => {
  return (
    <Row className="mt-3">
      <Col sm={4}>
        <Form.Select aria-label="select-folder">
          <option>select folder</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
      <Col>
        <Button>Add to folder</Button>
      </Col>
    </Row>
  );
};
