import { Container, Row, Col } from "react-bootstrap";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js";
import List from "./List.js";

//function returns a layout of all the different types of media as per their respective layout styles
//each other component used on the page makes its own API fetch request
function AllPage(props) {
  return (
    <Container>
      <Row className="my-2">
        <Col lg={6}>
          <Rectangle
            mediaType="movie"
            attribute="other"
            searchTerm={props.searchTerm}
            limit={3}
            setFavourites={props.setFavourites}
            favourites={props.favourites}
            clicker={props.clicker}
          />
        </Col>
        <Col lg={6}>
          <Square
            mediaType="podcast"
            attribute="other"
            searchTerm={props.searchTerm}
            limit={4}
            setFavourites={props.setFavourites}
            favourites={props.favourites}
            clicker={props.clicker}
          />
        </Col>
      </Row>
      <Row className="my-2">
        <Col lg={6}>
          <List
            mediaType="music"
            attribute="other"
            searchTerm={props.searchTerm}
            limit={4}
            setFavourites={props.setFavourites}
            favourites={props.favourites}
            clicker={props.clicker}
          />
        </Col>
        <Col lg={6}>
          <List
            mediaType="audiobook"
            attribute="other"
            searchTerm={props.searchTerm}
            limit={4}
            setFavourites={props.setFavourites}
            favourites={props.favourites}
            clicker={props.clicker}
          />
        </Col>
      </Row>
      <Row className="my-2">
        <Col lg={6}>
          <Rectangle
            mediaType="shortFilm"
            attribute="other"
            searchTerm={props.searchTerm}
            limit={3}
            setFavourites={props.setFavourites}
            favourites={props.favourites}
            clicker={props.clicker}
          />
        </Col>
        <Col lg={6}>
          <Rectangle
            mediaType="tvShow"
            attribute="other"
            searchTerm={props.searchTerm}
            limit={3}
            setFavourites={props.setFavourites}
            favourites={props.favourites}
            clicker={props.clicker}
          />
        </Col>
      </Row>
      <Row className="my-2">
        <Col lg={6}>
          <Square
            mediaType="software"
            attribute="other"
            searchTerm={props.searchTerm}
            limit={4}
            setFavourites={props.setFavourites}
            favourites={props.favourites}
            clicker={props.clicker}
          />
        </Col>
        <Col lg={6}>
          <List
            mediaType="ebook"
            attribute="other"
            searchTerm={props.searchTerm}
            limit={4}
            setFavourites={props.setFavourites}
            favourites={props.favourites}
            clicker={props.clicker}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AllPage;
