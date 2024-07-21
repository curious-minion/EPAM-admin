import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import Header from '../components/header/header';
import {mainContent,
    createForm,
    downloadArticle,
    downloadButton,
    rejectButton,
    createButton,
} from "@/app/createArticle/page.module.css"

export default function CreateArticle() {
    return (
      <Container>
        <Row>
            <Col sm={4}>
                <Header/>
            </Col>

            <Col sm={8}>

                <main className={mainContent}>
                    <h1>Створення публікації</h1>
                    <Form className={createForm}>
                        <Form.Label>Назва публікації</Form.Label>
                        <Form.Control type="text"/>

                        <Row className="g-2">

                            <Col md>
                                <Form.Label>Автор</Form.Label>
                                <Form.Control type="text"/>
                            </Col>
                            <Col md>
                                <Form.Label>Категорія</Form.Label>
                                <Form.Control type="text"/>
                            </Col>
                            <Col md>
                                <Form.Label>Дата</Form.Label>
                                <Form.Control type="date"/>
                            </Col>     
                        </Row>
            
                        <Form.Label>Вступне слово</Form.Label>
                        <Form.Control as="textarea" rows={10} />


                    </Form>
                    <div className={downloadArticle}>
                      <div>
                        <a href="">Завантажте файл з текстом публікації.<br></br> Необхідний формат файлу: PDF</a>
                        </div>
                        <button className={downloadButton}>Завантажити файл</button>
                        <button className={rejectButton}>Відхилити</button>
                        <button className={createButton}>Створити та зберегти</button>
                    </div>
                </main>
                
            </Col>
            
        </Row>
    </Container>
)}








            