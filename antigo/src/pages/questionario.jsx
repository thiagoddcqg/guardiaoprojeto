import React, { Component } from "react";
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

export class Questionario extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <center>
                <iframe title="Questionário proposto baseado na entrevista de anamnese" src="https://docs.google.com/document/d/e/2PACX-1vSjDf9mQKWgu5I_91MxjHs3CkIY8f5TsfDAmLTDLXbfc_tcf4NzZkNG6FWKSrlfcP-kSV4KVIDI3jOX/pub?embedded=true" width="800" height="4000"></iframe>
              </center>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Questionario;