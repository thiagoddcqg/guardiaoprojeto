import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div class="container-fluid bg-logo-row bg-logo-margin">
        <div class="container">
          <div class="row">
            <div class="bg-logo-container">
              <img class="bg-logo" src="img/logo.png" alt="img-logo-big" width="150" height="150"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;