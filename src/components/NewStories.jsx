const NewStories = () => {
  return (
    <section className="new new-wrapper">
      <h2 className="new__heading">New</h2>
      <ul className="new__list">
        <li className="new__list__item">
          <article className="new__article">
            <h3 className="new__article__heading">
              <a className="new__article__link" href="#">
                Hydrogen VS Electric Cars
              </a>
            </h3>
            <p className="new__article__summary">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </article>
        </li>
        <li className="new__list__item">
          <article className="new__article">
            <h3 className="new__article__heading">
              <a className="new__article__link" href="#">
                The Downsides of AI Artistry
              </a>
            </h3>
            <p className="new__article__summary">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
        </li>
        <li className="new__list__item">
          <article className="new__article">
            <h3 className="new__article__heading">
              <a className="new__article__link" href="#">
                Is VC Funding Drying Up?
              </a>
            </h3>
            <p className="new__article__summary">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </li>
      </ul>
    </section>
  )
}
export default NewStories
