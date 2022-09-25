import React, { Component } from "react";
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

export class Resultados extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Resultados</h2>
              <p>
                O projeto contempla <b>4 marcos principais</b>:
              </p>
              <ul>
                <li>A publicação de quatro artigos em anais de congressos:</li>
                <ul>
                  <li><b>Trabalhos completos:</b></li>
                  <ol>
                    <li>
                      FERREIRA, ANDRESSA; OLIVEIRA, FRAN; DAMASCENO, ADSON; CORTÉS, MARIELA. 
                      Conversational Agents for the Elderly, the Guardian Platform. In: <b>Computer on 
                      the Beach</b>, 2020, Balneário Camboriú. Anais do XI Computer on the Beach - COTB '20.
                      Itajaí: Universidade do Vale do Itajaí, 2020. v. 11. p. 293-300.
                    </li>
                    <li>
                      GAMA, THIAGO; OLIVEIRA, FRANCISCO; SILVA, BERENICE; GAMA, VANESSA. 
                      Revisão Integrativa da Literatura de Engajamento com Pessoas Idosas Utilizando Agentes Conversacionais. 
                      In: <b>Congresso Brasileiro Interdisciplinar em Ciência e Tecnologia</b>, 2021, Virtual. 
                      Anais do II Congresso Brasileiro Interdisciplinar de Ciência e Tecnologia - II CoBICET. 2021.
                    </li>
                  </ol>
                  <li><b>Resumos expandidos:</b></li>
                  <ol>
                    <li>
                      GAMA, THIAGO OLIVEIRA, FRANCISCO. 
                      Encontro Nacional de Atividade Multidisciplinar para a Educação, Ciência, Tecnologia e Sociedade. 
                      In: <b>Encontro Nacional de Atividade Multidisciplinar para a Educação, Ciência, Tecnologia e Sociedade</b>, 2021, Virtual. 
                      Anais do I Encontro Nacional de Atividade Multidisciplinar para a Educação, Ciência, Tecnologia e Sociedade - I ENAME-CTS. 2021.
                    </li>
                    <li>
                      FERREIRA, ANDRESSA; OLIVEIRA, FRANCISCO; DAMASCENO, ADSON. 
                      O que esperar ao conectar idosos e assistentes de voz em smartwatchs?. In: 
                      <b>Computer on the Beach</b>, 2019, Florianópolis. Anais do X Computer on the Beach 
                      - COTB '19. Itajaí: Universidade do Vale do Itajaí, 2019. p. 750-752.
                    </li>
                  </ol>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Resultados;