import './Saudacao.css'
const Saudacao = ({nome='Visitante'}) =>{
    return (
        <>
            <h1 className='title'>Olá, {nome}!</h1>
        </>
    );
}

export default Saudacao; 