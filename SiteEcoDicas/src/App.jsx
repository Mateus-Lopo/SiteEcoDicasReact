import React from 'react';
import Navbar from './components/navbar/navbar';
import Botao from './components/botao/botao';
import EcoCard from './components/EcoCard/ecoCard';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
          <div className="fundo-inicio">
            <div className="info-com-botoes">
              <div>
                <h1 class="titulo-principal">Bem-vindo ao EcoSabe!</h1>
                <h3 class="subtitulo-principal">Quem sabe cuida!</h3>
                <p>Aqui você encontrará dicas para um mundo mais sustentável.</p>
              </div>

              <div className="botoes">
                <Botao text="Login" className="botao-login" />
                <Botao text="Sign in" className="botao-signin" />
              </div>
            </div>
        </div>
        
        <div>
          <EcoCard 
            id="1"
            titulo="Como economizar água"
            imagem={"/images/economiaAgua.jpeg"}
            descricao="Aprende a economizar água com essa dica simples."
          />

          <EcoCard 
            id="2"
            titulo="Como reduzir o uso de plástico"
            imagem={"/images/reduzirPlastico.jpeg"}
            descricao="Aprende a reduzir o uso de plástico com essa dica simples."
          />
          
        </div>
      </main>
    </>
  );
}

export default App;
