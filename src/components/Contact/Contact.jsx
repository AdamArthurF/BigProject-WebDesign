import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="Contact" className="p-3">
                    <Container className="themed-container">
                        <Row>
                            <Col md="12">
                                <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Contact</h1>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}

export default Contact;
