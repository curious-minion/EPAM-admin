import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import editBtn from "../../../public/svg/edit-btn.svg"
import deleteBtn from "../../../public/svg/delete-btn2.svg"
import Image from "next/image";
import Header from '@/app/components/header/header';
import LinkBack from '@/app/components/backToArticlesButton/backToArticlesButton';
import { buttons,
       editButton,
       deleteButton,
       downloadButtonContainer,
	downloadButton,
	completeArticle,
	aboutArticle,
	autorArticle,
    category,

} from './page.module.css';
 
export default function Page() {
    return (
      <Container>
        <Row>
            <Col sm={4}>
                <Header/>
            </Col>

            <Col sm={8}>

              
<main className={completeArticle}>
				<h1>Перегляд публікації</h1>
                <div className={buttons}>
                <LinkBack/>
                <button className={editButton}>
                    <Image src={editBtn}/>
                    Редагувати</button>
                <button className={deleteButton}>
                    <Image src={deleteBtn}/>
                    Видалити</button>
                </div>
                <h2>Використання наноматеріалів у створенні 
                високоефективних комп'ютерних чіпів</h2>
				<div className={aboutArticle}>
				<p className={autorArticle}>Автор: <span>Сергій Кібернетик</span></p>
				<p>Дата публікації: <span>18/03/2024</span></p>
				</div>
				<p className={category}>Категорія публікації: <span>Нанотехнології та квантові обчислення</span></p>
			<ul>
				<li>З розвитком технологій наноматеріали стали ключовим елементом у створенні високоефективних комп'ютерних чіпів. Ця стаття розглядає останні досягнення в області нанотехнологій, що дозволяють значно підвищити продуктивність та зменшити енергоспоживання комп'ютерних систем. Ми проаналізуємо різноманітні підходи до інтеграції наноматеріалів у сучасні напівпровідникові технології, а також їх вплив на розвиток обчислювальної техніки. Особливу увагу буде приділено викликам і перспективам використання наноматеріалів у створенні майбутніх поколінь комп'ютерних чіпів.</li>
                <li>Однією з ключових областей застосування наноматеріалів є виробництво напівпровідникових компонентів, таких як транзистори, діоди та інші елементи, що використовуються в сучасних мікроелектронних пристроях. Наноматеріали дозволяють створювати більш ефективні та швидкі компоненти завдяки їхнім унікальним фізичним властивостям.</li>
            <li>Незважаючи на потужний потенціал наноматеріалів, їхнє впровадження в промисловість також супроводжується викликами. Один з них - стандартизація та надійність. Наноматеріали можуть бути дуже чутливими до зовнішніх впливів, таких як радіація або температурні зміни. Тому важливо ретельно вивчати їхні властивості та розробляти методи захисту.</li>
            </ul>
			<div className={downloadButtonContainer}>
					<button className={downloadButton}>
						<svg width="65" height="27" viewBox="0 0 65 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33 19.125L26.75 12.0938L28.5 10.0547L31.75 13.7109V2.25H34.25V13.7109L37.5 10.0547L39.25 12.0938L33 19.125ZM25.5 24.75C24.8125 24.75 24.2242 24.4748 23.735 23.9245C23.2458 23.3742 23.0008 22.7119 23 21.9375V17.7188H25.5V21.9375H40.5V17.7188H43V21.9375C43 22.7109 42.7554 23.3733 42.2663 23.9245C41.7771 24.4758 41.1883 24.7509 40.5 24.75H25.5Z" fill="black"/>
						</svg>
					Завантажити весь текст
					</button>
				</div>
			</main>
            </Col>

        </Row>
    </Container>
)}








