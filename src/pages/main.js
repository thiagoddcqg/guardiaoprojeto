import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Jumbotron, Container } from 'reactstrap';

function Main(){
    return(
        <div>
            <Header></Header>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Página Main</h1>
                    <p className="lead">Conteúdo do main.</p>
                </Container>
            </Jumbotron>
            <Footer></Footer>
        </div>
    );
};

export default Main;