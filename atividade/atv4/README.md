# Atividade 4 — GamePixel Blog em React

Refatoração da atividade 1 para React com Vite, mantendo o tema e o conteúdo do blog em uma única página.

## Executar

Instale Node.js 22.12 ou superior. Dentro da pasta atividade/atv4, execute:

```sh
npm install
npm run dev
```

Abra o endereço indicado no terminal. Para gerar e visualizar a versão de produção:

```sh
npm run build
npm run preview
```

## Componentes e props

- App: guarda os dados do post, os links e os posts relacionados.
- Header: recebe título, subtítulo e a navegação como children.
- Navigation: recebe a lista de links para seções da página.
- Article: recebe título, autor, data, introdução, seções, jogos e vídeo por props.
- Sidebar: recebe a lista de leituras relacionadas, com links externos.
- Footer: recebe o ano e o nome do blog.
- CommentForm: mantém os comentários em estado React durante a sessão, sem servidor ou envio de e-mails.

O HTML de entrada carrega src/main.jsx, que monta App com createRoot. Os estilos estão em src/styles.css. As atividades anteriores não foram alteradas.
