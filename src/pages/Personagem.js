import { Col, Container, Row } from 'react-bootstrap'
import FotoPersonagem from '../components/assets/VandaVision.jpg'
import FotoProfile from '../components/assets/VandaVision.jpg'

import '../components/style/personagem.css'



export default function Personagem(){
    return(
       <div>
            <Row>
                <Col>
                    <img className='Personagem_BackDrop' src={FotoPersonagem} alt=''/>
                </Col>
            </Row>
            <Row className='Personagem_InfoArea'>
                <Col>
                    <img className='Personagem_FotoProfile' src={FotoProfile} alt=''/>
                </Col>
                <Col className='Personagem-Info'>
                    <Row>WANDA MAXIMOFF</Row>
                    <Row>Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.</Row>
                </Col>                
            </Row>
       </div>
    )
}
