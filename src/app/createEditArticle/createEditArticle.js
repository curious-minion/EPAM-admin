"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

import Header from '../components/header/header';

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
	editButton,
	saveButton
} from "@/app/createEditArticle/createEditArticle.module.css";
import Link from "next/link";

import Image from "next/image";
import cancelBtnWhite from "../../../public/svg/cancel-white.svg";
import saveBtn from "../../../public/svg/save.svg";

export default function CreateEditArticle({pageTitle, articles }) {
	const [articlesData, setArticlesData] = useState([]);


	useEffect(() => {
		setArticlesData(articles)
	}, []);



	const pathname = usePathname();
	const pathId = pathname.slice(28);
	const article = articlesData? articlesData[pathId - 1]: "";
	const date = new Date(article?.date);
	const day = ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));

	const month = (date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1));

	const year = date.getFullYear();
	const readyDate = year + "-" + month + "-" + day;


	return (
		<Container>
        <Row>
            <Col sm={4}>
                <Header/>
  </Col>

				<Col sm={8}>

                <main className={mainContent}>
                    <h1>{pageTitle}</h1>
                    <Form className={createForm}>
                        <Form.Label>Назва публікації</Form.Label>
							<Form.Control className={formControlTitle} type="text" value={ article?.title} />

                        <Row className="g-5 ">

                            <Col md>
                                <Form.Label>Автор</Form.Label>
                                <Form.Control className={formControl} type="text" value={ article?.author}/>
                            </Col>
                            <Col md >
                                <Form.Label>Категорія</Form.Label>
                                <Form.Control className={formControl} type="text" value={ article?.category}/>
                            </Col>
                            <Col md >
                                <Form.Label>Дата</Form.Label>
									<Form.Control className={formControl} type="date" value={readyDate} />
                            </Col>
                        </Row>

                        <Form.Label>Вступне слово</Form.Label>
                        <Form.Control className={textArea} as="textarea" rows={10} value={ article?.text}/>


                    </Form>
                    <div className={downloadArticle}>
                      <div>
                        <a href="">Завантажте файл з текстом публікації.<br></br> Необхідний формат файлу: PDF</a>
                        </div>
                        <button className={downloadButton}>Завантажити файл</button>
							<Link class="link" href="/scientificWork"><button className={rejectButton}><Image src={cancelBtnWhite} alt="cancel editing" className={ editButton} />Відхилити</button></Link>
                        <button className={createButton}><Image src={saveBtn} alt="save article changes" className={ saveButton} />Створити та зберегти</button>
                    </div>
				</main>
				      </Col>

        </Row>
    </Container>


)}








