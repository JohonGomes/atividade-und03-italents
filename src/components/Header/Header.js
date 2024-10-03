import './Header.css'
import Saudacao from '../Saudacao/Saudacao';

const Header = () =>{
    return (
        <header className="header">
            <h1>Meus Animes Favoritos: </h1>
            <Saudacao nome="Geek"/>
        </header>
    )
}

export default Header;