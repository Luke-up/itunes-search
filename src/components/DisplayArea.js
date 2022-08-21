import { Container } from "react-bootstrap";
import React from "react";
import Rectangle from "./Rectangle.js";
import Square from "./Square.js";
import List from "./List.js";
import Favourites from "./Favourites.js";
import AllPage from "./AllPage.js";

//function display different media using different functional components
function DisplayArea(props) {
  //favourites list collect array of items that are liked
  const [favourites, setFavourites] = React.useState([]);

  //the all screen has its own layout
  if (props.mediaType === "all") {
    return (
      <AllPage
        searchTerm={props.searchTerm}
        setFavourites={setFavourites}
        favourites={favourites}
      />
    );
  } //movie type searches are laid out in a grid of rectangular cards
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
        />
      </Container>
    );
  } //podcasts and apps are laid out in square cards aligned in a grid
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
        />
      </Container>
    );
  } //music and books are laid out in a list
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
        />
      </Container>
    );
  } //favourites list has its own layout
  else {
    return (
      <Container>
        <Favourites favourites={favourites} setFavourites={setFavourites} />
      </Container>
    );
  }
}

export default DisplayArea;
