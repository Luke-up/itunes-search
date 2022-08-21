import { useEffect } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import React from "react";

//function renders a grid of square cards
//function is called to display podcasts and software media types
function Square(props) {
  const [searchResults, setSearchResults] = React.useState();

  //useEffect sends a get request to server
  //useEffect will run when search values are updated
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
  }, [props.mediaType, props.searchTerm, props.attribute, props.limit]);

  //function will add the current object to an array of favourites
  function addToFavourites(media) {
    if (!props.favourites) {
      props.setFavourites(media);
    } else {
      let newArray = props.favourites;
      newArray.push(media);
      props.setFavourites(newArray);
    }
  }

  //renders a grid of square cards
  //maps the search results recieved from the get request
  return (
    <Container className="bg-warning rounded">
      <h1 className="text-start text-light">Hello {props.mediaType}</h1>
      {searchResults ? (
        <Row>
          {searchResults.map((result) => {
            let imageLink = result.artworkUrl100;
            if (result.artworkUrl600) {
              imageLink = result.artworkUrl600;
            }
            return (
              <Col key={result.trackId} xl={3} md={4}>
                <Card className="my-3" id={result.trackId}>
                  <Image
                    className="m-2"
                    alt={"Poster for: " + result.trackName}
                    src={imageLink}
                  />
                  <div className="card-body">
                    <p>
                      <b>{result.artistName}</b>
                      <br />
                      {result.primaryGenreName}
                    </p>
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
                  </div>
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

export default Square;
