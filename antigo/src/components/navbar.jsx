import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Alternar navegação</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="sm-logo-container"> <a href="/"><img class="sm-logo img-responsive" src="img/logo.png" alt="img-logo-small" width="50" height="50"/></a></div>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="/">Início</a></li>
              <li><a href="/principios">Princípios</a></li>
              <li><a href="/resultados">Resultados</a></li>
              <li><a href="/questionario">Questionário</a></li>
              <li><a href="/referencias">Referências do projeto</a></li>
              <li><a href="/referencias-1">Referências do artigo</a></li>
              <li><a href="/links">Links úteis</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
