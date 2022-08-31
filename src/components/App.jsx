import React from "react";
import Definitions from "./Definitions";
import { definitionsData } from "../utils/definitionsData";

class App extends React.Component {
  render() {
    return (
      <div>
        <Definitions data={definitionsData} />
      </div>
    );
  }
}

export default App;
