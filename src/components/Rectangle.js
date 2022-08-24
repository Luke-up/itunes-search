import { useEffect } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import React from "react";

//function renders layouts for movie type media
//rectangular cards in a grid format
function Rectangle(props) {
  const [searchResults, setSearchResults] = React.useState();

  //grid should increase in size when rendered on the 'all' page
  let xlSize = 4;
  let mdSize = 6;
  if (props.limit === 3) {
    xlSize = 12;
    mdSize = 12;
  }

  //useEffect contains function to make get request
  //useEffect runs whenever search button is clicked
  useEffect(() => {
    function runFetch() {
      fetch(
        "/media?term=" +
          props.searchTerm +
          "&media=" +
          props.mediaType +
          "&attribute=" +
          props.attribute +
          "&limit=" +
          props.limit
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
    runFetch();
  }, [props.clicker]);

  //function pushes an object to the favourites array
  function addToFavourites(media) {
    if (!props.favourites) {
      props.setFavourites(media);
    } else {
      let newArray = props.favourites;
      newArray.push(media);
      props.setFavourites(newArray);
    }
  }

  //render of rectangular cards in a grid
  //function maps the results from the fetch request
  return (
    <Container className="bg-secondary rounded">
      <h1 className="text-start text-light">Hello {props.mediaType}</h1>
      {searchResults ? (
        <Row>
          {searchResults.map((result) => {
            return (
              <Col key={result.trackId} xl={xlSize} md={mdSize}>
                <Card className="my-2" id={result.trackId}>
                  <Row>
                    <Col xs={3}>
                      <Image
                        className="m-2"
                        alt={"Poster for: " + result.trackName}
                        src={result.artworkUrl100}
                      />
                    </Col>
                    <Col xs={9}>
                      <div className="mx-1 mt-2 row text-wrap">
                        <Col xs={10}>
                          <p>
                            <b>{result.trackName}</b>
                            <br />
                            {result.primaryGenreName}
                            <br />
                            {result.artistName}
                          </p>
                        </Col>
                        <Col xs={2}>
                          <div className="float-end">
                            {
                              <Button
                                onClick={() => {
                                  addToFavourites(result);
                                }}
                                className="py-1"
                              >
                                <i className="bi bi-hand-thumbs-up-fill"></i>
                              </Button>
                            }
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <p>We're looking, but haven't found anything yet :/</p>
      )}
    </Container>
  );
}
export default Rectangle;
