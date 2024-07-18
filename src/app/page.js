"use client"
import Image from "next/image";
import {authorization} from "./page.module.css";
import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import laptop from "../../public/svg/laptop.svg"
export default function Login() {
  return (
    <Container >
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          
          <Card className="shadow" className={authorization}>
            <Card.Body>
              <div className="mb-3 mt-4 text-center">
			  <Image src={laptop}  alt="Логотип"/>
                <h5 className="fw-bold mb-2">Кафедра <br></br> “Кібернетика та штучний інтелект”</h5>
                <h1>Вхід</h1>
				<p className="mb-5">Увійти як адміністратор</p>
                <Form className="mb-3">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">Введіть логін</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Введіть пароль</Form.Label>
                    <Form.Control type="password" placeholder="" />
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Увійти
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}