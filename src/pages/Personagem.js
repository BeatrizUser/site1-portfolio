import { Col, Row, Spinner} from 'react-bootstrap'
import axios from 'axios'
import React from 'react'
import '../components/style/personagem.css'
import { useParams} from 'react-router';
import {Link} from "react-router-dom"

export default function Personagem () {
    const params = useParams();
    return <PersonagemClass params={params}/>
}

class PersonagemClass extends React.Component {
    ironman = 1009368
    tresdman = 1011334

    constructor(props) {
        super(props);
        this.state = { personagem: undefined };
        this._pegaPersonagem(props.params.id)
    }

    async _pegaPersonagem(id) {
        try {
            const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=0843d25996d0a99345630a3e6035a7e7`)
            const personagem = response.data.data.results[0]
            this.setState({ personagem })
            console.log(personagem)
        } catch (error) {
            // console.log(error)
        }
    }
    
    _montaImagem(image, aspect){
        return image.path + "/" + aspect +"." + image.extension
    }
    _montaImagemFullSize(image){
        return image.path + "." + image.extension
    }

    _montaListaSeries(){
        return this.state.personagem.series.items.map((serie)=>{
            console.log(serie)
            const idserie = serie.resourceURI
            return (
                <div>
                <Link to={`/series/${idserie.split("/")[6]}`}>{serie.name}</Link>
            </div>
            )
        });
    }
  
    render() {
        if (!this.state.personagem){
            return (<div className='Spinner'><Spinner animation="border" /></div>)
        }

        return(
            <div>
               
                 <Row>
                     <Col>
                         <img className='Personagem_BackDrop' src={this._montaImagemFullSize(this.state.personagem.thumbnail)} alt=''/>
                     </Col>
                 </Row>
                 <Row className='Personagem_InfoArea'>
                     <Col>
                         <img className='Personagem_FotoProfile' src={this._montaImagem(this.state.personagem.thumbnail, "portrait_incredible")} alt=''/>
                     </Col>
                     <Col className='Personagem-Info'>
                         <Row>{ this.state.personagem.name }</Row>
                         <Row>{ this.state.personagem.description }</Row>
                            <Row>
                                <Col>
                                <Row>Lista Séries</Row>
                                <Row>{this._montaListaSeries()}</Row>
                                </Col>
                            </Row>
                     </Col>
                 </Row>
            </div>
        )
    }
}