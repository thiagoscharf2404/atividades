export default function Sidebar({ posts }) {
  return (
    <aside className="sidebar" aria-labelledby="relacionados">
      <h2 id="relacionados">Posts relacionados</h2>
      <p>Continue explorando o universo dos games.</p>
      <ul>{posts.map(post => <li key={post.href}><a href={post.href} target="_blank" rel="noreferrer">{post.title}</a></li>)}</ul>
    </aside>
  );
}
