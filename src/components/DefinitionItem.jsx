import React from "react";

class DefinitionItem extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <dt key={data.id}>{data.dt}</dt>
        <dd>{data.dd}</dd>
      </>
    );
  }
}

export default DefinitionItem;
