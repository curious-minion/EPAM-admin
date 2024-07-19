"use client";
import{
    pageContainer,
    headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	pageNavigationList,
    mainContent,
    tableHeader,
} from "./page.module.css"
import Link from "next/link";
import laptop from "../../../public/svg/laptop.svg"
import Image from "next/image";
import { Container, Row,Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
export default function ScientificWork () {
	return (
        <Container className={pageContainer}>
           
      <Row>
        <Col sm={4}>
        
      
        <header>
            <div className={headerContainer}>
                <Link href="">
                    <Image className={ logo} src={laptop}  alt="go to homepage"/>
                </Link>
            <h2 className={mainHeader}>
                Кафедра “Кібернетика та  <br></br>штучний інтелект”
            </h2>
            <nav className={pageNavigation}>
            <ul className={pageNavigationList}>
                <li><Link href="" >
                    Про кафедру
                    </Link>
                 </li>
                <li> <Link href="">
                        Новини
                     </Link>
                </li> 
                <li> <Link  href="">
                        Адміністрація
                     </Link>
                </li>
                <li><Link href="" >
                        Наукова робота
                    </Link>
                </li>
                <li><Link href="" >
                        Контакти
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
</header>
</Col>

    <Col sm={8}>
    <main className={mainContent}>
    <h1>Наукова  робота </h1>

    <Table striped>
      <thead className={tableHeader}>
        <tr>
          <th>№</th>
          <th>Назва публікації</th>
          <th>Автор</th>
          <th>Категорія</th>
          <th>Дата</th>
          <th>Дія</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Безпека та надійність систем штучного інтелекту: методи оцінки та вдосконалення</td>
          <td>Марина Нейронова</td>
          <td>Кібербезпека та криптографія</td>
          <td>27/05/2024</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Розробка ефективних алгоритмів глибинного навчання для обробки природної мови</td>
          <td>Ольга Алгоритмова</td>
          <td>Штучний інтелект та машинне навчання</td>
          <td>05/04/2024</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Використання наноматеріалів у створенні високоефективних комп'ютерних чіпів</td>
          <td>Сергій Кібернетик</td>
          <td>Нанотехнології та квантові обчислення</td>
          <td>18/03/2024</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Генеративні змагальні мережі (GANs): нові підходи до синтезу реалістичних зображень</td>
          <td>Олександр Кодер</td>
          <td>Штучний інтелект та машинне навчання</td>
          <td>24/03/2024</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Етика та відповідальність у розробці штучного інтелекту: аналіз і рекомендації</td>
          <td>Наталія Бітова</td>
          <td>Етика та соціальні аспекти технологій</td>
          <td>13/02/2024</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Психологічні аспекти взаємодії з VR/AR технологіями: нові знахідки</td>
          <td>Дар’я Технологічна</td>
          <td>Віртуальна та доповнена реальність (VR/AR)</td>
          <td>28/01/2024</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
 <button> Створити публікацію</button>
    </main>
    </Col>
    </Row>
</Container>

    )}