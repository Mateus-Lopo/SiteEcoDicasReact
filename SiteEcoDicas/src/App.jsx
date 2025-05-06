// Importa o React, necessário para criar componentes React
import React from 'react';

// Importa o componente de navegação do topo do site (Navbar)
import Navbar from './components/navbar/navbar';

// Importa o botão reutilizável (com diferentes estilos: login, signin)
import Botao from './components/botao/botao';

// Importa o componente que exibe uma dica com imagem, título e descrição
import EcoCard from './components/EcoCard/ecoCard';

// Lista de dicas sustentáveis com conteúdo que será exibido no site.
// Cada dica tem um id único, um título, uma imagem e uma descrição curta.
const dicas = [
  {
    id: '1',
    titulo: 'Como economizar água',
    imagem: '/images/economiaAgua.jpeg', // imagem já existente
    descricao: 'Feche a torneira enquanto escova os dentes ou lava a louça.',
  },
  {
    id: '2',
    titulo: 'Reduza o uso de plástico',
    imagem: '/images/reduzirPlastico.jpeg',
    descricao: 'Use sacolas reutilizáveis e evite canudos plásticos.',
  },
  {
    id: '3',
    titulo: 'Reaproveite embalagens',
    imagem: '/images/economiaAgua.jpeg',
    descricao: 'Potes de vidro e garrafas plásticas podem virar organizadores.',
  },
  {
    id: '4',
    titulo: 'Doe em vez de jogar fora',
    imagem: '/images/reduzirPlastico.jpeg',
    descricao: 'Roupas e objetos em bom estado podem ser úteis para outros.',
  },
  {
    id: '5',
    titulo: 'Use mais transporte público',
    imagem: '/images/economiaAgua.jpeg',
    descricao: 'Menos carros, menos poluição e trânsito.',
  },
];

// Componente principal do aplicativo (página inicial)
function App() {
  return (
    <>
      {/* Barra de navegação no topo da página */}
      <Navbar />

      {/* Conteúdo principal da página */}
      <main className="main-content">

        {/* Seção de boas-vindas com título, subtítulo e botões */}
        <div className="fundo-inicio">
          <div className="info-com-botoes">

            {/* Texto de introdução do site */}
            <div>
              <h1 className="titulo-principal">Bem-vindo ao EcoSabe!</h1>
              <h3 className="subtitulo-principal">Quem sabe cuida!</h3>
              <p>Aqui você encontrará dicas para um mundo mais sustentável.</p>
            </div>

            {/* Botões de login e cadastro (poderão futuramente ser interativos) */}
            <div className="botoes">
              <Botao text="Login" className="botao-login" />
              <Botao text="Sign in" className="botao-signin" />
            </div>
          </div>
        </div>

        {/* Seção com os cards de dicas */}
        <section className="eco-cards">
          {/* Renderiza dinamicamente um EcoCard para cada dica da lista */}
          {dicas.map((dica) => (
            <EcoCard
              key={dica.id}             // Necessário para performance do React
              id={dica.id}              // Usado na URL /dica/:id
              titulo={dica.titulo}      // Título que aparece no card
              imagem={dica.imagem}      // Caminho da imagem da dica
              descricao={dica.descricao} // Pequeno texto explicativo
            />
          ))}
        </section>
      </main>
    </>
  );
}

// Exporta o componente App para ser usado em outros arquivos (ex: main.jsx)
export default App;
