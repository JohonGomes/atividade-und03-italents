import Anime from '../Anime/Anime';
import './Animes.css';

const Animes = () => {
    const animes = [
        {
            nome: 'CardCaptors Sakura',
            poster:'https://upload.wikimedia.org/wikipedia/pt/5/55/Cardcaptor_Sakura.jpg',
            anoLancamento: '1996'
        },
        {
            nome: 'Tsubasa Resevoir Chronicle',
            poster:'https://upload.wikimedia.org/wikipedia/pt/1/16/Tsubasavol1japkod.jpg',
            anoLancamento:'2005'
        },
        {
            nome: 'Fruits Basket',
            poster:'https://upload.wikimedia.org/wikipedia/pt/6/64/Arte_Fruits_Basket.jpg',
            anoLancamento:'1998'
        },
        {
            nome: 'Fate Zero',
            poster:'https://m.media-amazon.com/images/I/71xw5z6JKBL._SL1408_.jpg',
            anoLancamento:'2006'
        },
        {
            nome: 'Rayearth',
            poster:'https://upload.wikimedia.org/wikipedia/pt/f/f1/Guerreiras_M%C3%A1gicas_de_Rayearth.jpg',
            anoLancamento:'1994'
        },
        {
            nome: 'Yu Yu Hakusho',
            poster:'https://upload.wikimedia.org/wikipedia/pt/4/4d/YuYu_Hakusho_volume_1.jpg',
            anoLancamento:'1990'
        },
    ]

    return (
        <section className='animes'>
            <h2>Meus Animes Favoritos</h2>
            <ul className="animes-lista">
                {animes.map((anime, index) => (
                    <Anime anime={anime} key={index}/>
                ))};
            </ul>
        </section>
    )
}

export default Animes;