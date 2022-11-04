import { Row, Col } from "react-bootstrap";
import Usestate from "./Usestate";
import UseEffect from "./UseEffect";
import UseReff from "./UseReff";

const BasicExample= ()=> {
  return(
    <div>
        <Row>
          <Col sm={3}>Ini Bagian 1
            <Usestate></Usestate>
          </Col>
          <Col sm={6}>Ini Bagian 2
            <UseEffect></UseEffect>
          </Col>
          <Col sm={3}>Ini Bagian 3
            <UseReff></UseReff>
          </Col>
        </Row>
    </div>
  )
}

export default BasicExample;