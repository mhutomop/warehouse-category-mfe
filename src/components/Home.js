import React from "react";
import ListCategory from "./ListCategory";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <ListCategory />
      </React.Fragment>
    );
  }
}

export default Home;