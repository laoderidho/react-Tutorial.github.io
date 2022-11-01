import { Row, Col } from "react-bootstrap";


const BasicExample= ()=> {
  return(
    <div>
        <Row>
          <Col sm={3}>Ini Bagian 1</Col>
          <Col sm={6}>Ini Bagian 2</Col>
          <Col sm={3}>Ini Bagian 3</Col>
        </Row>
    </div>
  )
}

export default BasicExample;