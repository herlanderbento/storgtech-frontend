import { Col, Container, Row } from 'reactstrap'
import { Button } from '../../components/Button'
import { InputCard, NewsLetterSection } from './NewsLetter.styles'

export function NewsLetter() {
  return (
    <NewsLetterSection>
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" sm="12" md="12">
            <form>
              <InputCard className="mt-4">
                <div className="input-group">
                  <span className="input-group-prepend input-group-text"></span>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Digita o seu email"
                  />
                </div>
                <Button variant={'primary'}>Enviar</Button>
              </InputCard>
            </form>
          </Col>
        </Row>
      </Container>
    </NewsLetterSection>
  )
}
