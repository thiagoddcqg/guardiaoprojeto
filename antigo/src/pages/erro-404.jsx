import React, { Component } from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Nl2br from '../components/nl2br';

export class Erro404 extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-404">
              <h1>404</h1>
            </div>
            <h2>Ops, a página que você procura não foi encontrada!</h2>
            <Nl2br />
            <a href="/"><span class="arrow"></span>Retornar à página inicial</a>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Erro404;