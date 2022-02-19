import React from "react";
import './style/rodape.css'
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit'

function Rodape(){
    return(
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Desenvolvido por Beatriz Machado </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}
export default Rodape;