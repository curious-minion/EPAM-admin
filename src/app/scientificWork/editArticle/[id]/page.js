import CreateEditArticle from "@/app/createEditArticle/createEditArticle";

import { promises as fs } from 'fs';

async function getArticles() {
 const path = process.cwd() + "/src/app/articles.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

const articles = await getArticles();

export default function Page() {
	const pageTitle = "Редагування публікації";

	return (

		<CreateEditArticle pageTitle={pageTitle} articles={articles } />
)}