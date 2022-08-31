import React from "react";

class DefinitionItem extends React.Component {
  render() {
    const { ...data } = this.props;
    return (
      <>
        <dt key={data.id}>{data.tittle}</dt>
        <dd>{data.description}</dd>
      </>
    );
  }
}

export default DefinitionItem;
