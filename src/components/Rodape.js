import React from "react";
import './style/rodape.css'


function Rodape(){
    return(
      <footer className="footer-copyright">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Copyright: <strong>Desenvolvido por</strong> <a href="https://github.com/BeatrizUser">Beatriz Machado</a> 
        </div>
      </footer>
  )
}
export default Rodape;