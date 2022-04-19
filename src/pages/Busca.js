import { Container, Row, Col, FormControl, Button, Form, Spinner} from 'react-bootstrap';
import '../components/style/resultadosbuscas.css'
import React from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import {Link} from "react-router-dom"


export default function ResultadosBusca () {
    const params = useLocation();
    return <ResultadosBuscaClass params={params}/>
}

class ResultadosBuscaClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ListaPersonagens: [], ListaSeries: [], ListaPersonagens_Filtrada: [], ListaSeries_Filtrada: []};
        this.query = new URLSearchParams(props.params.search).get('q')
        this._Busca(this.query)
        this._filtro = this._filtro.bind(this);
    }

    async _Busca(input) {
        try {
            const [resp1,resp2] = await Promise.all([
                axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${input}&apikey=0843d25996d0a99345630a3e6035a7e7`),
                axios.get(`https://gateway.marvel.com/v1/public/series?titleStartsWith=${input}&apikey=0843d25996d0a99345630a3e6035a7e7`)
            ])
            const ListaPersonagens = resp1.data.data.results
            const ListaPersonagens_Filtrada = resp1.data.data.results
            const ListaSeries = resp2.data.data.results
            const ListaSeries_Filtrada = resp2.data.data.results
            this.setState({ ListaPersonagens, ListaSeries, ListaPersonagens_Filtrada, ListaSeries_Filtrada })
            console.log(ListaPersonagens, ListaSeries)
            
        } catch (error) {
            // console.log(error)
        }
    }
    _montaPersonagensResults(){
        return this.state.ListaPersonagens_Filtrada.map((item)=>(
            <li className='Result-Personagem'>
                <a className='Result-Personagem' href={`/personagens/${item.id}`}><img className='Image-result' src={this._montaImagem(item.thumbnail, "standard_large")} alt=""/></a><Link to={`/personagens/${item.id}`}>{item.name}</Link>
            </li>
        ));
    }
    _montaSeriesResults(){
        
        return this.state.ListaSeries_Filtrada.map((item)=>(
            <li className='Result-Serie'>
                <a className='Result-Serie' href={`/series/${item.id}`}><img className='Image-result' src={this._montaImagem(item.thumbnail, "standard_large")} alt=""/></a><Link to={`/series/${item.id}`}>{item.title}</Link>
            </li>
        ));
    }

    _montaImagem(image, aspect){
        return image.path + "/" + aspect +"." + image.extension
    }

    _filtro(event){
        console.log(event)
        const filtro = event.target.value
        const lista_personagem_filtrada = this.state.ListaPersonagens.filter((item)=>{
            return item.name.toLowerCase().includes(filtro.toLowerCase())
        })
        const lista_serie_filtrada = this.state.ListaSeries.filter((item)=>{
            return item.title.toLowerCase().includes(filtro.toLowerCase())
        })
        this.setState ({ ListaPersonagens_Filtrada: lista_personagem_filtrada, ListaSeries_Filtrada: lista_serie_filtrada })
    }

    render() {
        if (this.state.ListaSeries.length === 0){
            return (<div className='Loading'><Spinner animation="border" /></div>)
        }
        return(
            <Container>               
                <Form className="d-flex align-center filtro" md="auto">
                    <FormControl onChange={this._filtro} type="search" placeholder="Filtrar" className="me-2" aria-label="Filtrar" style={{ width: "25vw"}} />
                    <Button variant="dark">Filtrar</Button>
                </Form>

                <Row>
                    <Col>
                        <div className="titulo-Busca">Personagens</div>
                        <div className='listapersonagens'>{this._montaPersonagensResults()}</div>
                    </Col>
                </Row>             
                <Row>
                    <Col>
                        <div className="titulo-Busca">Series</div>
                        <div className='listaseries'>{this._montaSeriesResults()}</div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

// https://www.google.com/search?q=buscadoida
// https://www.google.com/search/buscadoida