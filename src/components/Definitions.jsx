import React from "react";
import DefinitionItem from "./DefinitionItem";

class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <dl>
        {data &&
          data.map((listItem) => (
            <DefinitionItem
              key={listItem.id}
              data-id={listItem.id}
              tittle={listItem.dt}
              description={listItem.dd}
            />
          ))}
      </dl>
    );
  }
}

export default Definitions;
