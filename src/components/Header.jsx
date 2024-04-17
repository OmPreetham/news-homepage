import Navigation from '../components/Navigation'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">W.</h1>
      <img src="images/logo.svg" alt="W." />
      <Navigation />
    </header>
  )
}
export default Header
