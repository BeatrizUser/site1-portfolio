import React from "react";
import './style/rodape.css'


function Rodape(){
    return(
      <footer className="footer">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Copyright:<a className="footer-linkGitHub" href="https://github.com/BeatrizUser">Desenvolvido por Beatriz Machado</a>
        </div>
      </footer>
  )
}
export default Rodape;