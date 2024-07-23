"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
	action
} from "./articleTableRow.module.css";
import Image from "next/image";
import DialogBox from "../dialogBox/dialogBox";
import editBtn from "../../../../public/svg/edit-btn.svg";
import deleteBtn from "../../../../public/svg/delete-btn.svg";

export default function ArticleTableRow({ articles }) {

	const [articlesData, setArticlesData] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [modalText, setModalText] = useState([]);

	useEffect(() => {
		setArticlesData(articles)
	}, []);

	const onClick = (title) => {
		setShowModal(true);
		setModalText(title);
	}

	return (
		<>
			{articlesData?.map(article =>
				<tr key={article.id}>
					<td>{ article.id}</td>
					<td>
						<Link href={`/viewArticle/${article.id}`}>{article.title} </Link></td>
					<td>{article.author}</td>
					<td>{article.category}</td>
					<td>{article.date}</td>
					<td>
						<div className={action}>
							<button>
								<Link href={`/scientificWork/editArticle/${article.id}`}><Image src={editBtn} alt="edit the article"/></Link>

							</button>

							<button onClick={() => onClick(article.title)}>  <Image src={deleteBtn} alt="delete the article"/> </button>

						</div>
					</td>
				</tr>


			)}


			<DialogBox
				bodyText={modalText}
      	show={showModal}
				onHide={() => setShowModal(false)} />
			</>

	)
}