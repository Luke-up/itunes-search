import { Container } from "react-bootstrap";
import React from "react";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js";
import List from "./List.js";
import Favourites from "./Favourites.js";
import AllPage from "./AllPage.js";

//function returns the results of Navigation bar search
function DisplayArea(props) {
  //Favourites array contains array of objects
  //Add button is rendered alongside search result
  const [favourites, setFavourites] = React.useState([]);

  //All display renders each other component multiple times on the same screen
  //All display makes an individual fetch request for each type of media
  if (props.mediaType === "all") {
    return (
      <AllPage
        searchTerm={props.searchTerm}
        setFavourites={setFavourites}
        favourites={favourites}
        clicker={props.clicker}
      />
    );
  } //Statement will conditionally render if corresponding media type is selected on navigation bar
  //These media types will be rendered in the Rectangle shaped Card style
  else if (
    props.mediaType === "movie" ||
    props.mediaType === "shortFilm" ||
    props.mediaType === "tvShow"
  ) {
    return (
      <Container>
        <Rectangle
          mediaType={props.mediaType}
          attribute={props.attribute}
          searchTerm={props.searchTerm}
          limit={12}
          setFavourites={setFavourites}
          favourites={favourites}
          clicker={props.clicker}
        />
      </Container>
    );
  } //Statement will conditionally render if corresponding media type is selected on navigation bar
  //These media types will be rendered in the Square shaped Card style
  else if (props.mediaType === "podcast" || props.mediaType === "software") {
    return (
      <Container>
        <Square
          mediaType={props.mediaType}
          attribute={props.attribute}
          searchTerm={props.searchTerm}
          limit={12}
          setFavourites={setFavourites}
          favourites={favourites}
          clicker={props.clicker}
        />
      </Container>
    );
  } //Statement will conditionally render if corresponding media type is selected on navigation bar
  //These media types will be rendered in the List style
  else if (
    props.mediaType === "music" ||
    props.mediaType === "audiobook" ||
    props.mediaType === "ebook"
  ) {
    return (
      <Container>
        <List
          mediaType={props.mediaType}
          attribute={props.attribute}
          searchTerm={props.searchTerm}
          limit={12}
          setFavourites={setFavourites}
          favourites={favourites}
          clicker={props.clicker}
        />
      </Container>
    );
  } //Statement will conditionally render if 'favourites' is selected on navigation bar
  else {
    return (
      <Container>
        <Favourites favourites={favourites} setFavourites={setFavourites} />
      </Container>
    );
  }
}

export default DisplayArea;
