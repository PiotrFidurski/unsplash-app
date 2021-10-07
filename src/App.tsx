import { Container, Row } from "react-bootstrap";
import { Routes } from "./components/Routes";

function App() {
  return (
    <Container className="mt-2" fluid>
      <Row>
        <Routes />
        {/* <SearchBar /> */}
      </Row>
    </Container>
  );
}

export default App;
