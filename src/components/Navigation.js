import { Container, Nav, Col, Row, Form } from "react-bootstrap";
import SelectorMenu from "./SelectorMenu.js";

//function returns a navigation bar at the top of the page
//input for search updates value on change
//attribute selection menu is a separate component that renders differently for each media type
function Navigation(props) {
  return (
    <Container className="pt-4 border rounded mx-auto my-3">
      <Row className="mb-4">
        <Col>
          <Form.Control onChange={(e) => props.setSearchTerm(e.target.value)} />
        </Col>
        <Col>
          <SelectorMenu
            mediaType={props.mediaType}
            setAttribute={props.setAttribute}
          />
        </Col>
      </Row>
      <Nav fill variant="tabs" defaultActiveKey="/all">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("all");
              props.setAttribute("other");
            }}
            eventKey="all"
          >
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("movie");
              props.setAttribute("other");
            }}
            eventKey="Movies"
          >
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("podcast");
              props.setAttribute("other");
            }}
            eventKey="Podcasts"
          >
            Podcasts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("music");
              props.setAttribute("other");
            }}
            eventKey="Music"
          >
            Music
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("audiobook");
              props.setAttribute("other");
            }}
            eventKey="Audiobooks"
          >
            Audiobooks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("shortFilm");
              props.setAttribute("other");
            }}
            eventKey="ShortFilms"
          >
            Short films
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("tvShow");
              props.setAttribute("other");
            }}
            eventKey="TVShows"
          >
            TV shows
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("software");
              props.setAttribute("other");
            }}
            eventKey="Software"
          >
            Software
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("ebook");
              props.setAttribute("other");
            }}
            eventKey="Ebooks"
          >
            E books
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              props.setMediaType("favourites");
              props.setAttribute("other");
            }}
            eventKey="Favourites"
          >
            Favourites
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default Navigation;
