import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

import Header from '@/app/components/header/header';

import CreateEditArticle from '@/app/createEditArticle/createEditArticle';

export default function Page() {
    return (
      <Container>
        <Row>
            <Col sm={4}>
                <Header/>
            </Col>

            <Col sm={8}>

                <CreateEditArticle/>

            </Col>

        </Row>
    </Container>
)}








