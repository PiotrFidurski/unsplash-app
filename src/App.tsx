import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { useAppSelector } from "./app/hooks";
import { Routes } from "./components/Routes";

function App() {
  const folders = useAppSelector((state) => state.folders.folders);

  React.useEffect(() => {
    localStorage.setItem("folders", JSON.stringify({ folders }));
  }, [folders]);

  return (
    <Container fluid>
      <Row>
        <Routes />
      </Row>
    </Container>
  );
}

export default App;
