import React from "react";
import Navigation from "./components/Navigation.js";
import DisplayArea from "./components/DisplayArea.js";

function App() {
  //state contains three variables that make up the fetch request
  const [mediaType, setMediaType] = React.useState("movie");
  const [searchTerm, setSearchTerm] = React.useState("Lucy");
  const [attribute, setAttribute] = React.useState("other");

  //function returns two components
  //navigation at the top
  //display of results at the bottom
  return (
    <div className="App">
      <Navigation
        setAttribute={setAttribute}
        setMediaType={setMediaType}
        setSearchTerm={setSearchTerm}
        mediaType={mediaType}
      />
      <DisplayArea
        attribute={attribute}
        mediaType={mediaType}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
