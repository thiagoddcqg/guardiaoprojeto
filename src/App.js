import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Catalogo from './pages/catalogo';

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/contato" component={Contato} />
                <Route path="/catalogo" component={Catalogo} />
            </Switch>        
        </BrowserRouter>
    );
};

export default App;