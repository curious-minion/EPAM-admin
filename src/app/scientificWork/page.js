import{
  pageContainer,
  mainContent,
  add,
	createPublicationButton
} from "./page.module.css"

import Link from "next/link";
import { Container, Row,Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

import Header from "@/app/components/header/header";
import ArticleTableRow from "../components/articleTableRow/articleTableRow";

import { promises as fs } from 'fs';

async function getArticles() {
 const path = process.cwd() + "/src/app/articles.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}



const articles = await getArticles();

export default function ScientificWork() {

	return (
        <Container className={pageContainer}>
          <Row>
            <Col sm={4}>
                <Header/>
            </Col>

            <Col sm={8}>
            <main className={mainContent}>
            <h1>Наукова  робота </h1>
    <Table striped>
      <tbody>
    <tr>
          <th>№</th>
          <th>Назва публікації</th>
          <th>Автор</th>
          <th>Категорія</th>
          <th>Дата</th>
          <th>Дія</th>
		</tr>

								<ArticleTableRow articles={articles}/>
      </tbody>
    </Table>
 <button className={createPublicationButton}>
      <svg className={add} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2412_95)">
      <path d="M10.5 20C10.5 20.3978 10.658 20.7794 10.9393 21.0607C11.2206 21.342 11.6022 21.5 12 21.5C12.3978 21.5 12.7794 21.342 13.0607 21.0607C13.342 20.7794 13.5 20.3978 13.5 20V13.5H20C20.3978 13.5 20.7794 13.342 21.0607 13.0607C21.342 12.7794 21.5 12.3978 21.5 12C21.5 11.6022 21.342 11.2206 21.0607 10.9393C20.7794 10.658 20.3978 10.5 20 10.5H13.5V4C13.5 3.60218 13.342 3.22064 13.0607 2.93934C12.7794 2.65804 12.3978 2.5 12 2.5C11.6022 2.5 11.2206 2.65804 10.9393 2.93934C10.658 3.22064 10.5 3.60218 10.5 4V10.5H4C3.60218 10.5 3.22064 10.658 2.93934 10.9393C2.65804 11.2206 2.5 11.6022 2.5 12C2.5 12.3978 2.65804 12.7794 2.93934 13.0607C3.22064 13.342 3.60218 13.5 4 13.5H10.5V20Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_2412_95">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>
							<Link class="link" href="/scientificWork/createArticle">	Створити публікацію</Link>
						</button>

    </main>
    </Col>
		</Row>

</Container>

    )}