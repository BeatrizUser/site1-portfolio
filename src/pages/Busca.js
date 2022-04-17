import { Container, Row} from 'react-bootstrap';
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
        this.state = { listaResultados1: [], listaResultados2: []};
        this.query = new URLSearchParams(props.params.search).get('q')
        this._Busca(this.query)
    }

    async _Busca(input) {
        try {
            const [resp1,resp2] = await Promise.all([
                axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${input}&apikey=0843d25996d0a99345630a3e6035a7e7`),
                axios.get(`https://gateway.marvel.com/v1/public/series?titleStartsWith=${input}&apikey=0843d25996d0a99345630a3e6035a7e7`)
            ])
            const listaResultados1 = resp1.data.data.results
            const listaResultados2 = resp2.data.data.results
            this.setState({ listaResultados1, listaResultados2 })
            console.log(listaResultados1, listaResultados2)
            
        } catch (error) {
            // console.log(error)
        }
    }
    _montaPersonagensResults(){
        return this.state.listaResultados1.map((item)=>(
            <div>
                <Link to={`/personagens/${item.id}`}>{item.name}</Link>
            </div>
        ));
    }
    _montaSeriesResults(){
        return this.state.listaResultados2.map((item)=>(
            <div>
                <Link to={`/series/${item.id}`}>{item.title}</Link>
            </div>
        ));
    }

    render() {
        return(
            <Container>
                <Row>Personagens</Row>
                <Row>{this._montaPersonagensResults()}</Row>
                <Row>Series</Row>
                <Row>{this._montaSeriesResults()}</Row>
            </Container>
        )
    }
}

// https://www.google.com/search?q=buscadoida
// https://www.google.com/search/buscadoida