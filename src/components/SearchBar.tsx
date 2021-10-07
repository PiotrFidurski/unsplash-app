import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setImages } from "../features/images/imagesSlice";
import { setQuery } from "../features/query/querySlice";
import { unsplash } from "../unsplashConfig";

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
  console.log(photos);
  return (
    <Form className="mt-5" onSubmit={handleSubmit}>
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
  );
}
