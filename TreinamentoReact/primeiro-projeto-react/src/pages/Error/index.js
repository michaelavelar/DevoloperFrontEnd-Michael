import { Link } from 'react-router-dom';
import './error.css';

function Erro(){
    return(
        <div className="not-found">
            <h2>404</h2>
            <h3>Pagina não encontrada</h3>       
            <Link to="/">Veja todos filmes</Link>
        </div>
    )
}

export default Erro;