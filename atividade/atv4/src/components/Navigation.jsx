export default function Navigation({ links }) {
  return <nav className="menu" aria-label="Navegação principal"><ul>{links.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></nav>;
}
