import React from "react";
import Navigation from "./components/Navigation.js";
import DisplayArea from "./components/DisplayArea.js";

function App() {
  //state contains three variables that make up the fetch request
  const [mediaType, setMediaType] = React.useState("movie");
  const [searchTerm, setSearchTerm] = React.useState("Lucy");
  const [attribute, setAttribute] = React.useState("other");
  const [clicker, setClicker] = React.useState(0);

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
        setClicker={setClicker}
        clicker={clicker}
      />
      <DisplayArea
        attribute={attribute}
        mediaType={mediaType}
        searchTerm={searchTerm}
        clicker={clicker}
      />
    </div>
  );
}

export default App;
