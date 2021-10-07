import { Button, Col, Form, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setImages } from "../features/images/imagesSlice";
import { setQuery } from "../features/query/querySlice";
import { unsplash } from "../unsplashConfig";
import { ImageComponent } from "./UnsplashImage";

export function SearchBar() {
  const query = useAppSelector((state) => state.query.value);

  const photos = useAppSelector((state) => state.images.images);

  const dispatch = useAppDispatch();

  function handleSubmit(e: React.BaseSyntheticEvent) {
    unsplash.search
      .getPhotos({ query })
      .then((photos) => dispatch(setImages(photos.response?.results)))
      .catch((error) => console.log(error));
    e.preventDefault();
  }

  function handleChange(e: React.BaseSyntheticEvent) {
    dispatch(setQuery(e.target.value));
  }

  return (
    <Col>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="queryInput">
            Search for an Unsplash image
          </Form.Label>
          <Form.Control
            id="queryInput"
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
      {/* folder selection */}
      <Row className="mt-3">
        <Col sm={4}>
          <Form.Select aria-label="Default select example">
            <option>Open to select folders</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col>
          <Button>Add to folder</Button>
        </Col>
      </Row>
      {/* img galleries */}
      <Row className="mt-3">
        {photos.map((image) => (
          <ImageComponent image={image} key={image.id} />
        ))}
      </Row>
    </Col>
  );
}
