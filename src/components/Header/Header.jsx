import './Header.css'
import logo from '../../assets/images/logo.png'

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Project logo" />
      <h1 className="header__title">GCSI Portfolio</h1>
    </header>
  )
}