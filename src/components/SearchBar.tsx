import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setQuery } from "../features/query/querySlice";

export function SearchBar() {
  const query = useAppSelector((state) => state.query.value);
  const dispatch = useAppDispatch();
  function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
  }
  function handleChange(e: React.BaseSyntheticEvent) {
    dispatch(setQuery(e.target.value));
  }

  return (
    <Form className="mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formQuery">
        <Form.Label>Search for image</Form.Label>
        <Form.Control
          type="query"
          placeholder="Type to search"
          value={query}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}
