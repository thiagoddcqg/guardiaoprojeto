import React from 'react';
import Footer from '../components/footer';
import { Jumbotron, Container } from 'reactstrap';

function Contato() {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Página Contato</h1>
                    <p className="lead">Conteúdo do contato.</p>
                </Container>
            </Jumbotron>
            <Footer></Footer>
        </div>
    );
};

export default Contato;