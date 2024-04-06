const TopStory = () => {
  return (
    <section className="top-story top-story-wrapper">
      <article className="top-story__article">
        <div className="top-story__article__image-wrapper">
          <picture className="top-story__article__image__picture">
            <source
              srcSet="/images/image-web-3-mobile.jpg"
              media="(max-width: 800px)"
            />
            <img
              className="top-story__article__image"
              src="/images/image-web-3-desktop.jpg"
              alt="image-web-3-desktop"
            />
          </picture>
        </div>
        <div className="top-story__article__content">
          <h2 className="top-story__article__heading">
            The Bright Future of Web 3.0?
          </h2>
          <div className="top-story__article__description">
            <p className="top-story__article__summary">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="top-story__article__read-more">Read more</button>
          </div>
        </div>
      </article>
    </section>
  )
}
export default TopStory
