import './App.css';
import Mensagem from './components/Mensagem/Mensagem';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Animes from './components/Animes/Animes';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <Header/>
        <div className='container'>
          <Mensagem cor="blue">
            <p>Vamos Assistir um Anime?</p>
          </Mensagem>
          <Animes/>
          <section className="contato">
            <h2>Gostou? Entre em contato comigo!</h2>
            <Form/>
          </section>
        </div>    
      <Footer/>
    </>
  );
}

export default App;
