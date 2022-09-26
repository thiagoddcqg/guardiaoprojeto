import React from 'react';
import Footer from '../components/footer';
import { Jumbotron, Container } from 'reactstrap';

function Sobre(){
    return(
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Página Sobre</h1>
                    <p className="lead">Conteúdo do sobre.</p>
                </Container>
            </Jumbotron>
            <Footer></Footer>
        </div>
    );
};

export default Sobre;