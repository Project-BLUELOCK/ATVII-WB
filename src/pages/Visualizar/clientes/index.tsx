/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar';

export class VisualizarCliente extends Component {
    render(){

        return (
            <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Visualizar cliente: "Ana Clara"</h1>
                <Button  variant="outline-light" href='/clientes'>Voltar</Button>
                <Card
                bg="black"
                text="white"
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Ana Clara</Card.Title>
                        <Card.Text>
                            Nome Social: Ana 
                        </Card.Text>
                        <Card.Text>
                            Gênero: Feminino
                        </Card.Text>
                        <Card.Text>
                            CPF: 901.405.222-27
                        </Card.Text>
                        <Card.Text>
                            RG: 42.372.999/22
                        </Card.Text>
                        <Card.Text>
                            Telefone: 12 4257-9602
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
        </section>
    )
}
};