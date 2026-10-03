import CommentForm from './CommentForm';

export default function Article({ title, author, date, displayDate, introduction, sections, games, videoUrl, videoTitle }) {
  return (
    <article>
      <section id="introducao" className="introducao">
        <h2>{title}</h2>
        <p className="data-publicacao">Por {author} · Publicado em <time dateTime={date}>{displayDate}</time></p>
        <p>{introduction}</p>
      </section>
      <section id="secoes" className="secoes-conteudo" aria-label="Evolução dos jogos">
        {sections.map(section => <section className="bloco-jogo" id={section.id} key={section.id}><h3>{section.title}</h3><p>{section.content}</p></section>)}
      </section>
      <section id="recomendados" className="recomendados">
        <h3>Jogos Recomendados</h3>
        <ul>{games.map(game => <li key={game}>{game}</li>)}</ul>
      </section>
      <section id="video" className="video-container">
        <h3>Vídeo Relacionado</h3>
        <div className="video-wrapper"><iframe src={videoUrl} title={videoTitle} loading="lazy" allowFullScreen /></div>
      </section>
      <CommentForm />
    </article>
  );
}
