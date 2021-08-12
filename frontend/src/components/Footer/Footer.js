import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center py3">
                    Copyright &copy; Notezipper
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
