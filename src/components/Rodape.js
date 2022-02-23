import React from "react";
import './style/rodape.css'


function Rodape(){
    return(
      <footer className="footer-copyright">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Copyright: <strong> Desenvolvido por <a href="https://github.com/BeatrizUser">Beatriz Machado</a> </strong>
        </div>
      </footer>
  )
}
export default Rodape;