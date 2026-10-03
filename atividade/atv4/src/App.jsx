import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  const post = {
  "title": "A Evolução dos Jogos Eletrônicos",
  "author": "Thiago Scharf",
  "date": "2026-09-07",
  "displayDate": "07 de setembro de 2026",
  "introduction": "Os jogos eletrônicos passaram por transformações incríveis desde o seu surgimento. O que começou como experimentos simples em telas de tubo se tornou uma das maiores indústrias de entretenimento do mundo, reunindo tecnologia, arte e histórias envolventes. Neste post, vamos conhecer um pouco dessa jornada.",
  "sections": [
    {
      "id": "parte-1",
      "title": "Os Primeiros Passos",
      "content": "Nos anos 70 e 80, jogos como Pong e Space Invaders introduziram o conceito de entretenimento eletrônico para o público em geral, usando gráficos simples e mecânicas fáceis de entender."
    },
    {
      "id": "parte-2",
      "title": "A Era dos 16 e 32 Bits",
      "content": "Com consoles como Super Nintendo e Mega Drive, os jogos ganharam cores vibrantes, trilhas sonoras marcantes e histórias mais elaboradas, consolidando franquias que existem até hoje."
    },
    {
      "id": "parte-3",
      "title": "Jogos Modernos e Online",
      "content": "Atualmente, os jogos eletrônicos contam com gráficos realistas, mundos abertos e experiências multiplayer que conectam jogadores do mundo inteiro em tempo real."
    }
  ],
  "games": [
    "The Legend of Zelda: Breath of the Wild",
    "Minecraft",
    "Stardew Valley",
    "God of War"
  ],
  "videoUrl": "https://www.youtube.com/embed/LONIPJFoAUM",
  "videoTitle": "A Origem e Evolução dos Jogos em 10 minutos."
};
  const navigation = [
    { href: '#introducao', label: 'Início' },
    { href: '#secoes', label: 'Conteúdo' },
    { href: '#recomendados', label: 'Recomendados' },
    { href: '#video', label: 'Vídeo' },
    { href: '#comentarios', label: 'Comentários' }
  ];
  const relatedPosts = [
    { title: 'A história dos videogames', href: 'https://pt.wikipedia.org/wiki/História_dos_jogos_eletrônicos' },
    { title: 'Conheça o Super Nintendo', href: 'https://pt.wikipedia.org/wiki/Super_Nintendo_Entertainment_System' },
    { title: 'O universo dos jogos online', href: 'https://pt.wikipedia.org/wiki/Jogo_online' }
  ];
  return (
    <>
      <Header title="GamePixel Blog" subtitle="Um espaço para falar sobre o universo dos games">
        <Navigation links={navigation} />
      </Header>
      <main>
        <Article {...post} />
        <Sidebar posts={relatedPosts} />
      </main>
      <Footer year={2026} blogName="GamePixel Blog" />
    </>
  );
}
