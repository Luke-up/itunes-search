import { useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import React from "react";

//function renders a list of the search results
//music and books are called with this layout
function List(props) {
  const [searchResults, setSearchResults] = React.useState();

  //useEffect makes a get request to the server
  //function runs whenever the search values are updated
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
          console.log(data.results);
        });
    }
    runFetch();
  }, [props.mediaType, props.searchTerm, props.attribute, props.limit]);

  //function saves the object to the favourites array
  function addToFavourites(media) {
    if (!props.favourites) {
      props.setFavourites(media);
    } else {
      let newArray = props.favourites;
      newArray.push(media);
      props.setFavourites(newArray);
    }
  }

  //render maps the results of the search in a table format
  return (
    <Container className="bg-info rounded">
      <h1 className="text-start text-light">Hello {props.mediaType}</h1>
      {searchResults ? (
        <Table striped hover className="border text-start">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              {props.mediaType === "music" ? <th>Album</th> : ""}
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result) => {
              let key = result.collectionId;
              if (result.trackId) {
                key = result.trackId;
              }
              return (
                <tr key={key}>
                  {props.mediaType === "audiobook" ? (
                    <th>{result.collectionName}</th>
                  ) : (
                    <th>{result.trackName}</th>
                  )}

                  <th>{result.artistName}</th>
                  {props.mediaType === "music" ? (
                    <th>{result.collectionName}</th>
                  ) : (
                    ""
                  )}

                  <th>
                    {result.primaryGenreName
                      ? result.primaryGenreName
                      : result.genres[0]}
                  </th>
                  <th>
                    <Button
                      onClick={() => {
                        addToFavourites(result);
                      }}
                      className="py-1"
                    >
                      <i className="bi bi-hand-thumbs-up-fill"></i>
                    </Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p>We're looking, but haven't found anything yet :/</p>
      )}
    </Container>
  );
}

export default List;
