import React from "react";
import Definitions from "./Definitions";
import { definitionsData } from "../utils/definitionsData";

class App extends React.Component {
  render() {
    return (
        <Definitions data={definitionsData} />
    );
  }
}

export default App;
