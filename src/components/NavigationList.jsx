const NavigationList = ({ isOpen }) => {
  console.log(isOpen)
  return (
    <ul className={isOpen ? 'nav__list__mobile' : 'nav__list'}>
      <li className="nav__list__item">
        <a href="#">Home</a>
      </li>
      <li className="nav__list__item">
        <a href="#">New</a>
      </li>
      <li className="nav__list__item">
        <a href="#">Popular</a>
      </li>
      <li className="nav__list__item">
        <a href="#">Trending</a>
      </li>
      <li className="nav__list__item">
        <a href="#">Categories</a>
      </li>
    </ul>
  )
}
export default NavigationList
