import React from "react";
import './style/rodape.css'


function Rodape(){
    return(
      <footer className="footer-copyright">
        <div className="footer-copyright">
          <span>&copy; {new Date().getFullYear()} Copyright:</span>
          <span className="span-rodape"><strong>Desenvolvido por</strong> <a href="https://github.com/BeatrizUser">Beatriz Machado</a></span> 
        </div>
      </footer>
  )
}
export default Rodape;