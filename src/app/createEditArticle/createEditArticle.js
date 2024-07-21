import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import {
	mainContent,
	createForm,
    formControl,
    formControlTitle,
    textArea,
	downloadArticle,
	downloadButton,
	rejectButton,
	createButton,
} from "@/app/createEditArticle/createEditArticle.module.css";

export default function CreateEditArticle() {
    return (
                <main className={mainContent}>
                    <h1>Створення публікації</h1>
                    <Form className={createForm}>
                        <Form.Label>Назва публікації</Form.Label>
                        <Form.Control className={formControlTitle} type="text"/>

                        <Row className="g-5 ">

                            <Col md>
                                <Form.Label>Автор</Form.Label>
                                <Form.Control className={formControl} type="text"/>
                            </Col>
                            <Col md >
                                <Form.Label>Категорія</Form.Label>
                                <Form.Control className={formControl} type="text"/>
                            </Col>
                            <Col md >
                                <Form.Label>Дата</Form.Label>
                                <Form.Control className={formControl} type="date"/>
                            </Col>
                        </Row>

                        <Form.Label>Вступне слово</Form.Label>
                        <Form.Control className={textArea} as="textarea" rows={10} />


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


)}








