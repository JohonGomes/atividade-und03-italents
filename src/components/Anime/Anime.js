import './Anime.css';

const Anime = ({anime}) => {
    return (
        <li className="anime-item">
            <img src={anime.poster} alt=""></img>
            <h4>{anime.nome}</h4>
            <p>{anime.anoLancamento}</p>
        </li>        
    )
}

export default Anime;