import React, { Component } from 'react';
import nl2br from 'react-newline-to-break';


class Nl2br extends Component {

  render() {
    let myString = "\n"
    return (
      <>
        {nl2br(myString)}
      </>
    );
  }
}

export default Nl2br;
