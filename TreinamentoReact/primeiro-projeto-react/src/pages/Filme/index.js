import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './filme-info.css'
import { toast } from 'react-toastify'

import api from '../../services/api'

function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true)

    

    useEffect(()=>{
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "3e9f156bf54f84d974dc9d5a0b5244b7",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                navigate("/", {replace: true});
                return;
            })
        }
        loadFilme();

        
        return() => {
        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@cinemapipoca");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id )

        if(hasFilmes){
            toast.warn("Filme já esta na sua lista!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@cinemapipoca", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!")
    }
    
    if(loading){
        return(
            <div className="filme-info"><h2>Carregando filme escolhido...</h2></div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>            
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            
            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>

        </div>
    )
}

export default Filme;