import React, { Component } from "react";
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

export class Links extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1>Links úteis</h1>
              <ul>
                <li>
                  Accessible Rich Internet Applications (WAI-ARIA) 1.1
                  <br />
                  <a href="https://www.w3.org/TR/wai-aria-1.1/">https://www.w3.org/TR/wai-aria-1.1/</a>
                </li>
                <li>
                  Banco de dados global de práticas favoráveis aos idosos da OMS
                  <br />
                  <a href="https://extranet.who.int/datacol/custom_view_report.asp?survey_id=3536&view_id=6_301&display_filter=1">https://extranet.who.int/datacol/custom_view_report.asp?survey_id=3536&view_id=6_301&display_filter=1</a>
                </li>
                <li>
                  Global AgeWatch Index
                  <br />
                  <a href="http://www.globalagewatch.org/">http://www.globalagewatch.org/</a>
                </li>
                <li>
                  Programa de Ambientes Amigáveis ao Idoso da OMS
                  <br />
                  <a href="http://www.who.int/ageing/age_friendly_cities/en/">http://www.who.int/ageing/age_friendly_cities/en/</a>
                </li>
                <li>
                  Projeção da população do Brasil e das Unidades da Federação
                  <br />
                  <a href="https://www.ibge.gov.br/apps/populacao/projecao/index.html">https://www.ibge.gov.br/apps/populacao/projecao/index.html</a>
                </li>
                <li>
                  Rede Global de Cidades e Comunidades Amigas dos Idosos da OMS
                  <br />
                  <a href="http://www.who.int/ageing/age_friendly_cities_network/en/">http://www.who.int/ageing/age_friendly_cities_network/en/</a>
                </li>
                <li>
                  Relational Agents
                  <br />
                  <a href="https://www.ccs.neu.edu/home/bickmore/agents/">https://www.ccs.neu.edu/home/bickmore/agents/</a>
                </li>
                <li>
                  Site do projeto Guardião
                  <br />
                  <a href="https://guardiaoprojeto.herokuapp.com/">https://guardiaoprojeto.herokuapp.com/</a>
                </li>
                <li>
                  Silver Economy Awards
                  <br />
                  <a href="http://silvereconomyawards.eu/">http://silvereconomyawards.eu/</a>
                </li>
                <li>
                  Web Content Accessibility Guidelines (WCAG) 2.1
                  <br />
                  <a href="https://www.w3.org/TR/WCAG21/">https://www.w3.org/TR/WCAG21/</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Links;