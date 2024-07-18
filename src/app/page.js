"use client"
import Image from "next/image";
import {authorization, formLabel, formControl} from "./page.module.css";
import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import laptop from "../../public/svg/laptop.svg"
export default function Login() {
  return (
    <Container >
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          
          <Card className={authorization}>
            <Card.Body>
              <div className="mb-3 mt-4 text-center">
			  <Image src={laptop}  alt="Логотип"/>
                <h2 className="fw-bold">Кафедра <br></br> “Кібернетика та штучний інтелект”</h2>
                <h1>Вхід</h1>
				<p>Увійти як адміністратор</p>
                <Form className="mb-3">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={formLabel}>Введіть логін</Form.Label>
                    <Form.Control className={formControl} type="text" placeholder="" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={formLabel}>Введіть пароль</Form.Label>
                    <Form.Control className={formControl} type="password" placeholder="" />


                    
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button variant="secondary" type="submit">
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