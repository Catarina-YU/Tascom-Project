import "./style.css"

export default function Header({children}) {
  return (
    <header className="header">
      {children}
    </header>
  )
}