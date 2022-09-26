import React from 'react';
import Footer from '../components/footer';
import CatalogoLista from '../components/catalogo-lista';
import { Jumbotron, Container } from 'reactstrap';

function Catalogo() {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Página Catálogo</h1>
                    <p className="lead">Conteúdo do catálogo.</p>
                    <CatalogoLista></CatalogoLista>
                </Container>
            </Jumbotron>
            <Footer></Footer>
        </div>
    );
};

export default Catalogo;