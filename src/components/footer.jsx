import React, { Component } from "react";
import Nl2br from './nl2br';

export class Footer extends Component {
    render() {        
        return (
            <p align="center">
                <Nl2br />
                <footer class="li-footer-inline-block">
                    <div className="col-xs-12 text-center">
                        <p>&reg;Guardião 2022</p>
                        <p>Projetado por <a href="https://github.com/thiagoddcqg">thiagoddcqg</a></p>
                    </div>
                </footer>
            </p>
        );
    }
}

export default Footer;