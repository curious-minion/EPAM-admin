"use client";
import{
    pageContainer,
    headerContainer,
	logo,
	mainHeader,
	pageNavigation,
	pageNavigationList,
  exitLink,
  mainContent,
  add,
  action
} from "./page.module.css"
import Link from "next/link";
import laptop from "../../../public/svg/laptop.svg"
import editBtn from "../../../public/svg/edit-btn.svg"
import deleteBtn from "../../../public/svg/delete-btn.svg"
import Image from "next/image";
import { Container, Row,Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
export default function ScientificWork () {
	return (
        <Container className={pageContainer}><Row>
             <Col sm={4}><header>
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

        <Link className={exitLink} href="./">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4286 3H4V18.75C4 19.3467 4.24082 19.919 4.66947 20.341C5.09812 20.7629 5.67951 21 6.28571 21H15.4286M16.5714 15.375L20 12M20 12L16.5714 8.625M20 12H8.57143" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        Вийти
        </Link>
    </div>
</header>
</Col>

    <Col sm={8}>
    <main className={mainContent}>
    <h1>Наукова  робота </h1>

    <Table striped>
      {/* <thead className={tableHeader}>
        <tr>
          <th>№</th>
          <th>Назва публікації</th>
          <th>Автор</th>
          <th>Категорія</th>
          <th>Дата</th>
          <th>Дія</th>
        </tr>
      </thead> */}
      <tbody>
    <tr>
          <th>№</th>
          <th>Назва публікації</th>
          <th>Автор</th>
          <th>Категорія</th>
          <th>Дата</th>
          <th>Дія</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Безпека та надійність систем штучного інтелекту: методи оцінки та вдосконалення</td>
          <td>Марина Нейронова</td>
          <td>Кібербезпека та криптографія</td>
          <td>27/05/2024</td>
          <td>
          <div className={action}>
            <Image src={editBtn}/>
            <Image src={deleteBtn}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Розробка ефективних алгоритмів глибинного навчання для обробки природної мови</td>
          <td>Ольга Алгоритмова</td>
          <td>Штучний інтелект та машинне навчання</td>
          <td>05/04/2024</td>
          <td>
          <div className={action}>
            <Image src={editBtn}/>
            <Image src={deleteBtn}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Використання наноматеріалів у створенні високоефективних комп'ютерних чіпів</td>
          <td>Сергій Кібернетик</td>
          <td>Нанотехнології та квантові обчислення</td>
          <td>18/03/2024</td>
          <td>
          <div className={action}>
            <Image src={editBtn}/>
            <Image src={deleteBtn}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Генеративні змагальні мережі (GANs): нові підходи до синтезу реалістичних зображень</td>
          <td>Олександр Кодер</td>
          <td>Штучний інтелект та машинне навчання</td>
          <td>24/03/2024</td>
          <td>
          <div className={action}>
            <Image src={editBtn}/>
            <Image src={deleteBtn}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Етика та відповідальність у розробці штучного інтелекту: аналіз і рекомендації</td>
          <td>Наталія Бітова</td>
          <td>Етика та соціальні аспекти технологій</td>
          <td>13/02/2024</td>
          <td>
          <div className={action}>
            <Image src={editBtn}/>
            <Image src={deleteBtn}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Психологічні аспекти взаємодії з VR/AR технологіями: нові знахідки</td>
          <td>Дар’я Технологічна</td>
          <td>Віртуальна та доповнена реальність (VR/AR)</td>
          <td>28/01/2024</td>
          <td>
          <div className={action}>
            <Image src={editBtn}/>
            <Image src={deleteBtn}/>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
 <button > 
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

  Створити публікацію</button>
    </main>
    </Col>
    </Row>
</Container>

    )}