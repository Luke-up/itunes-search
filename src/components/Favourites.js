import { Container, Table, Button } from "react-bootstrap";
import React from "react";

//Component renders the contents of Favourites array in the DisplayArea component
function Favourites(props) {
  //function removes an item from the array of favourites
  function removeFavourites(id) {
    let favourites = props.favourites;
    favourites = favourites.filter((object) => {
      return object.trackId !== id && object.collectionId !== id;
    });
    props.setFavourites(favourites);
  }

  return (
    <Container className="bg-info rounded">
      <h1 className="text-start text-light">Hello favourties</h1>

      {props.favourites ? (
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
            {props.favourites.map((result, id) => {
              return (
                <tr key={id}>
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
                      : result.genres}
                  </th>
                  <th>
                    <Button
                      onClick={() => {
                        removeFavourites(
                          result.trackId ? result.trackId : result.collectionId
                        );
                      }}
                      className="py-1 bg-light outline-danger"
                    >
                      <i className="bi bi-hand-thumbs-down-fill text-danger"></i>
                    </Button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p>It looks like you haven't liked anything yet :/</p>
      )}
    </Container>
  );
}

export default Favourites;
