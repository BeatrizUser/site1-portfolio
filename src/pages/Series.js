import { Col, Row, Spinner, Container} from 'react-bootstrap'
import axios from 'axios'
import React from 'react'
import '../components/style/Serie.css'
import { useParams } from 'react-router';


export default function Serie () {
    const params = useParams();
    return <SerieClass params={params}/>
}

class SerieClass extends React.Component {


    constructor(props) {
        super(props);
        this.state = { Serie: undefined };
        this._pegaSerie(props.params.id)
    }

    async _pegaSerie(id) {
        try {
            const response = await axios.get(`http://gateway.marvel.com/v1/public/series/${id}?apikey=0843d25996d0a99345630a3e6035a7e7`)
            const Serie = response.data.data.results[0]
            this.setState({ Serie })
            console.log(Serie)
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
    _montaListaComics(){
        return this.state.Serie.comics.items.map((item)=>(
            <div>
                <img className='imagem-Comic' src={this._montaImagemFullSize(this.state.Serie.thumbnail)} alt=""/><li className='titulo-Comic'>{item.name}</li>
            </div>
            ))
    }

  
    render() {
        if (!this.state.Serie){
            return (<div className='Spinner'><Spinner animation="border" /></div>)
        }

        return(
            <Container>
                <Row>
                     <Col>
                        <Row><h3 className="titulo-Serie">{this.state.Serie.title}</h3></Row>
                        <Row><h4 className="description-Serie">{this.state.Serie.description}</h4></Row>
                     </Col>

                     <Col className='colImagem-Serie'>
                        <img className='imagem-Serie' src={this._montaImagemFullSize(this.state.Serie.thumbnail)} alt=""></img>
                     </Col>
                </Row>
                <Row>
                    <Row><h3 className="titulo-Serie">Comics</h3></Row>
                    <Col className='col-Comic'>{this._montaListaComics()}</Col> 
                </Row>
            </Container>
        )
    }
}