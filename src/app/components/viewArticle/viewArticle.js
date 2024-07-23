"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import deleteBtn from "../../../../public/svg/delete-btn2.svg";
import editBtn from "../../../../public/svg/edit-btn.svg";
import download from "../../../../public/svg/download.svg";
import LinkBack from "../backToArticlesButton/backToArticlesButton";
import Link from "next/link";

import {
	buttons,
	editButton,
	deleteButton,
	downloadButtonContainer,
	downloadButton,
	completeArticle,
	aboutArticle,
	autorArticle,
	date,
	completeArticleText,
	category,
	articleSpan

} from './viewArticle.module.css';

export default function ViewArticle({articles}) {

	const [articlesData, setArticlesData] = useState([])
	useEffect(() => {
		setArticlesData(articles)
	}, []);

	const pathname = usePathname();
	const pathId = pathname.slice(13);
	const article = articlesData[pathId - 1];
	return (
		<main className={completeArticle}>
				<h1>Перегляд публікації</h1>
                <div className={buttons}>
                <LinkBack/>

				<button className={editButton}>
					<Link href={`/scientificWork/editArticle/${article?.id}`} class="link">
						<Image src={editBtn} alt="edit the article" />
						Редагувати
					</Link></button>

                <button className={deleteButton}>
                    <Image src={deleteBtn}/>
                    Видалити</button>
                </div>
                <h2>{article?.title}</h2>
				<div className={aboutArticle}>
				<p className={autorArticle}>Автор: <span className={articleSpan}>{article?.author}</span></p>
				<p className={date}>Дата публікації: <span className={articleSpan}>{article?.date}</span></p>
				</div>
				<p className={category}>Категорія публікації: <span className={articleSpan}>{article?.category}</span></p>

				<p className={completeArticleText}>{ article?.text}</p>

			<div className={downloadButtonContainer}>
				<button className={downloadButton}>
					<Image src={download} alt="download the article text" style={{ ["margin-right"]: "22px" }}/>
					Завантажити весь текст
					</button>
				</div>
			</main>
	)
}