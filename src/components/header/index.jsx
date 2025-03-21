import "./style.css"

export default function Header({color, children}) {
  return (
    <header className="header" style={{color: color}}>
      {children}
    </header>
  )
}