import React from "react";

class Tombol extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.hitungAngka}>
          {this.props.namaTombol}
        </button>
      </div>
    );
  }
}

export default Tombol;
