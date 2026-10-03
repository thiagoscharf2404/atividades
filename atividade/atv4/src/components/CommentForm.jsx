import { useState } from 'react';

export default function CommentForm() {
  const [comments, setComments] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('nome').trim();
    const content = data.get('comentario').trim();
    if (!name || !content) return;
    setComments(previous => [...previous, { id: crypto.randomUUID(), name, content }]);
    form.reset();
  }
  return (
    <section id="comentarios" className="formulario-comentario">
      <h3>Deixe seu comentário</h3>
      <p className="aviso">Os comentários aparecem apenas nesta sessão. Não há envio de e-mails.</p>
      <form onSubmit={handleSubmit}>

          <div className="campo-form">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>

          <div className="campo-form">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="campo-form">
            <label htmlFor="nascimento">Data de nascimento:</label>
            <input type="date" id="nascimento" name="nascimento" />
          </div>

          <div className="campo-form">
            <label htmlFor="jogo-favorito">Jogo favorito:</label>
            <input type="text" id="jogo-favorito" name="jogo-favorito" />
          </div>

          <div className="campo-form">
            <label htmlFor="nota">Nota para o artigo (1 a 10):</label>
            <input type="number" id="nota" name="nota" min="1" max="10" required />
          </div>

          <div className="campo-form campo-checkbox">
            <input type="checkbox" id="novidades" name="novidades" />
            <label htmlFor="novidades">Quero receber novidades sobre jogos</label>
          </div>

          <div className="campo-form">
            <label htmlFor="comentario">Comentário:</label>
            <textarea id="comentario" name="comentario" rows="5" required></textarea>
          </div>

          <button type="submit">Enviar comentário</button>

        </form>
      <div aria-live="polite" className="comentarios-publicados">
        {comments.map(comment => <div className="comentario" key={comment.id}><h4>{comment.name}</h4><p>{comment.content}</p></div>)}
      </div>
    </section>
  );
}
