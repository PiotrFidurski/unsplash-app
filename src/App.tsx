import { Container, Row } from "react-bootstrap";
import { SearchBar } from "./components/SearchBar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <Container className="mt-2" fluid>
      <Row>
        <SideBar />
        <SearchBar />
      </Row>
    </Container>
  );
}

export default App;
