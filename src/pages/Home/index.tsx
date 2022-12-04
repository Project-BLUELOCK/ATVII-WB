/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import Navbar_ from '../../component/NavBar';
import { Button } from 'react-bootstrap';
import './styles.css'

export class Home extends Component {
    render() {

        return (
            <section>
                <header>
                    <Navbar_ />
                </header>
                <main>
                    <div className="text">
                        <h1>Salão WB</h1>
                        <h2>SEJA BEM VINDO </h2> 
                        

                        <Button  className="custom-btn btn-5" href='/servicos'>Serviços </Button>
                        {/* <button className="custom-btn btn-5" ref="/servicos">Serviços</button> */}

                    </div>
                </main>
            </section>
        );
    }
}