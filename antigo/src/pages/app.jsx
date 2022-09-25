import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1>Guardião</h1>
              <p>
                <ul>
                  <li><b>Tema:</b> Diretrizes de IHC</li>
                  <li><b>Linha do tempo:</b> Outubro 2019 - Dezembro 2021</li>
                  <li><b>Palavras-chave:</b> Agente relacional. <i>Common ground</i>. Experimento Mágico de Oz; Diretrizes.</li>
                </ul>
              </p>
              <h2>Descrição</h2>
              <p>
                Guardião é um projeto de pesquisa da UECE focado em identificar os elementos 
                comunicacionais que melhoram o engajamento do usuário idoso com interfaces de voz 
                e, a partir desses achados, criar diretrizes para futuros pesquisadores e 
                desenvolvedores de agentes relacionais dirigidos ao público idoso.
              </p>
              <p>
                <b>Descrição curta:</b> Diretrizes de IHC para desenvolvimento 
                de agentes relacionais direcionados para pessoas idosas.
              </p>
              <h2>Redes sociais</h2>
              <ul>
                <li>Página do Facebook: <a href="https://web.facebook.com/guardiaoprojeto">@guardiaoprojeto</a></li>
                <li>Conta do Instagram: <a href="https://www.instagram.com/guardiaoprojeto">@guardiaoprojeto</a></li>
                <li>Canal no YouTube: <a href="https://www.youtube.com/channel/UC-tX7CGzOTsYtK9ifxX9BHg">Projeto Guardião</a></li>
                <li>Conta do Twitter: <a href="https://twitter.com/guardiaoprojeto">@guardiaoprojeto</a></li>
                <li>Contato público: <a href="mailto: thiagoddcqg@gmail.com">Thiago Gama</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <h2 align="center">Membros</h2>
            <p>
              <ul>
                <li><a href="http://lattes.cnpq.br/0649930882307115">Prof. PhD. Francisco C. de M. B. Oliveira</a></li>
                <li><a href="http://lattes.cnpq.br/0562845366910137">Andressa M. de O. Ferreira</a></li>
                <li><a href="http://lattes.cnpq.br/2634189300609719">Thiago D. de C. Q. Gama</a></li>
              </ul>
            </p>
          </div>

          <div class="col-md-4">
            <h2 align="center">Repositório do projeto</h2>
            <p>
              <ul>
                <li><a href="https://github.com/thiagoddcqg/guardiao">GitHub</a></li>
              </ul>
            </p>
          </div>

          <div class="col-md-4">
            <h2 align="center">Contato</h2>
            <p>
              <a href ="mailto: guardiaoprojeto@gmail.com">Enviar e-mail</a>
            </p>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default App;