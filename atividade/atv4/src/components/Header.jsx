export default function Header({ title, subtitle, children }) {
  return <header className="cabecalho"><h1>{title}</h1><p>{subtitle}</p>{children}</header>;
}
