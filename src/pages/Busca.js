import { Container, Row} from 'react-bootstrap';
import '../components/style/resultadosbuscas.css'
import React from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


export default function ResultadosBusca () {
    const params = useLocation();
    return <ResultadosBuscaClass params={params}/>
}

class ResultadosBuscaClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listaResultados: []};
        this.query = new URLSearchParams(props.params.search).get('q')
        this._Busca(this.query)
    }

    async _Busca(input) {
        try {
            const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${input}&apikey=0843d25996d0a99345630a3e6035a7e7`)
            const listaResultados = response.data.data.results
            this.setState({ listaResultados })
            console.log(listaResultados)
            
        } catch (error) {
            // console.log(error)
        }
    }
    _montaListaResultados(){
        return this.state.listaResultados.map((item)=>(
            <div>
                <Link to={`/personagens/${item.id}`}>{item.name}</Link>
            </div>
        ));
    }

    render() {
        return(
            <Container>
                <Row>Resultados</Row>
                <Row>{this._montaListaResultados()}</Row>
            </Container>
        )
    }
}

// https://www.google.com/search?q=buscadoida
// https://www.google.com/search/buscadoida