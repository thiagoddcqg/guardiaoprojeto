import React, { Component } from "react";
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';

export class Principios extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Princípios éticos</h2>
              <ul>
                <li>
                  <b>Acessibilidade e usabilidade:</b> princípio é particularmente relevante
                  para edifícios e o ambiente mais amplo, produtos e serviços - portanto,
                  tecnologias assistivas, design universal e comunidade "amiga do idoso"
                  abordagens. Links para os aspectos da igualdade, equidade e justiça.
                </li>
                <li>
                  <b>Preço acessível:</b> o princípio impacta a “acessibilidade” de
                  produtos e serviços para pessoas com recursos limitados.
                </li>
                <li>
                  <b>Autonomia e capacitação:</b> o princípio reflete um imperativo
                  para que produtos e serviços sejam projetados e configurados
                  de forma a envolver, possibilitar escolhas e facilitar um maior
                  controle por parte dos idosos em relação aos principais aspectos
                  de suas vidas.
                </li>
                <li>
                  <b>Beneficência e não-maleficência:</b> princípio subjacente no
                  contexto de muitos produtos ou serviços. Relacione-se com a maneira
                  como os riscos benéficos ou prejudiciais são avaliados e tratados.
                </li>
                <li>
                  <b>Cuidado, proteção e suporte:</b> princípio é especificamente
                  relevante para produtos ou serviços fornecidos ou usados por
                  idosos dependentes, frágeis ou vulneráveis de alguma forma para
                  os quais são necessários cuidados.
                </li>
                <li>
                  <b>Igualdade, equidade e justiça:</b> o princípio afirma o status
                  igualitário e o direito dos idosos de acessar produtos e serviços.
                  Cada link para os aspectos de acessibilidade e disponibilidade.
                </li>
                <li>
                  <b>Inclusão, não discriminação e impacto social:</b> o princípio
                  apoia abordagens de produtos e serviços que desafiar a desvantagem
                  enfrentada pelos idosos por meio de práticas e crenças inadequadas
                  e relacionadas à idade.
                </li>
                <li>
                  <b>Privacidade, proteção e segurança:</b> esse princípio reconhece
                  os direitos das pessoas mais velhas nos contextos de “tradicional”
                  gama de produtos e serviços e as considerações especiais relativas
                  aos agentes relacionais (por exemplo, para cibersegurança).
                </li>
                <li>
                  <b>Engajamento de longo prazo:</b> engajamento de longo prazo 
                  simboliza o relacionamento duradouro entre a aplicação e seus 
                  usuários. Mensura a capacidade do aplicativo em engajar o público 
                  e criar um compromisso a longo prazo com eles.
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

export default Principios;