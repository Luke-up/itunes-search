import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import Attributes from "./Attributes.json";

//function renders a selection bar for each media type
//options are displayed for specific search criteria
function SelectorMenu(props) {
  const [optionsArray, setOptionsArray] = React.useState([{}]);

  //useeffect sets the array based on the type of media
  //the options are updated on media change
  useEffect(() => {
    if (props.mediaType === "movie") {
      setOptionsArray(Attributes.movie);
    } else if (props.mediaType === "podcast") {
      setOptionsArray(Attributes.podcast);
    } else if (props.mediaType === "music") {
      setOptionsArray(Attributes.music);
    } else if (props.mediaType === "audiobook") {
      setOptionsArray(Attributes.audiobook);
    } else if (props.mediaType === "shortFilm") {
      setOptionsArray(Attributes.shortFilm);
    } else if (props.mediaType === "tvShow") {
      setOptionsArray(Attributes.tvShow);
    } else {
      setOptionsArray("");
    }
  }, [optionsArray, props.mediaType]);

  //renders select dropdown in navigation bar
  return (
    <Form.Select onChange={(e) => props.setAttribute(e.target.value)}>
      {optionsArray ? (
        <option>Choose a search criteria</option>
      ) : (
        <option>Search by name</option>
      )}
      {optionsArray
        ? optionsArray.map((attribute) => {
            let key = 1;
            if (attribute.searchTerm) {
              key = attribute.searchTerm;
            }
            return (
              <option key={key} value={attribute.searchTerm}>
                {attribute.commonTerm}
              </option>
            );
          })
        : ""}
    </Form.Select>
  );
}

export default SelectorMenu;
