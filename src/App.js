import React from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Book from "./components/Book/Book";
import BookList from "./components/Book/BookList";
import UserList from "./components/User/UserList";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Footer from "./components/footer";
import Home from "./components/Home";
import Main from './pages/main';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Catalogo from './pages/catalogo';

const App = () => {
    window.onbeforeunload = (event) => {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
            e.returnValue = "";
        }
        return "";
    };

    return (
        <Router>
            <NavigationBar />
            <Container>
                <Row>
                    <Col lg={12} className={"margin-top"}>
                        <Switch>
                            <Route path="/" exact component={Main} />
                            <Route path="/sobre" component={Sobre} />
                            <Route path="/contato" component={Contato} />
                            <Route path="/catalogo" component={Catalogo} />
                            <Route path="/home" exact component={Home} />
                            <Route path="/add" exact component={Book} />
                            <Route path="/edit/:id" exact component={Book} />
                            <Route path="/list" exact component={BookList} />
                            <Route path="/users" exact component={UserList} />
                            <Route path="/register" exact component={Register} />
                            <Route path="/login" exact component={Login} />
                            <Route
                                path="/logout"
                                exact
                                component={() => (
                                    <Login message="User Logged Out Successfully." />
                                )}
                            />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;