import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Header from '@/app/components/header/header';



import { promises as fs } from 'fs';
import ViewArticle from '@/app/components/viewArticle/viewArticle';

async function getArticles() {
 const path = process.cwd() + "/src/app/articles.json"
  const file = await fs.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
}

const articles = await getArticles();

export default function Page() {
    return (
      <Container>
        <Row>
            <Col sm={4}>
                <Header/>
            </Col>

            <Col sm={8}>

<ViewArticle articles={articles}/>

            </Col>

        </Row>
    </Container>
)}








