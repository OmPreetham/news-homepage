const MoreStories = () => {
  return (
    <section className="more more-wrapper">
      <ul className="more__list">
        <li className="more__list__item">
          <article className="more__article">
            <div className="more__article__image-wrapper">
              <img className="more__article__image" src="/images/" alt="" />
            </div>
            <div className="more__article__content">
              <p className="more__article__number">01</p>
              <h3 className="more__article__heading">
                <a className="more__article__link" href="#">
                  Reviving Retro PCs
                </a>
              </h3>
              <p className="more__article__summary">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </article>
        </li>
        <li className="more__list__item">
          <article className="more__article">
            <div className="more__article__image-wrapper">
              <img className="more__article__image" src="/images/" alt="" />
            </div>
            <div className="more__article__content">
              <p className="more__article__number">02</p>
              <h3 className="more__article__heading">
                <a className="more__article__link" href="#">
                  Top 10 Laptops of 2022
                </a>
              </h3>
              <p className="more__article__summary">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </article>
        </li>
        <li className="more__list__item">
          <article className="more__article">
            <div className="more__article__image-wrapper">
              <img className="more__article__image" src="/images/" alt="" />
            </div>
            <div className="more__article__content">
              <p className="more__article__number">02</p>
              <h3 className="more__article__heading">
                <a className="more__article__link" href="#">
                  The Growth of Gaming
                </a>
              </h3>
              <p className="more__article__summary">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </article>
        </li>
      </ul>
    </section>
  )
}
export default MoreStories
