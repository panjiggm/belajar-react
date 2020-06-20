import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "john doe",
        age: 30,
      },
      address: "Jakarta",
    };
  }

  render() {
    return (
      <div>
        Hello {this.props.country} usia {this.props.age}!!!!
      </div>
    );
  }
}

export default HelloWorld;
