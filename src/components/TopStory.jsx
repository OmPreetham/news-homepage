const TopStory = () => {
  return (
    <section className="top-story-wrapper">
      <article className="top-story">
        <div className="top-story__image-wrapper">
          <img
            className="top-story__image"
            src="/images/image-web-3-desktop.jpg"
            alt="image-web-3-desktop"
          />
        </div>
        <div className="top-story__content">
          <h2 className="top-story__heading">The Bright Future of Web 3.0?</h2>
          <div className="top-story__description">
            <p className="top-story__summary">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="top-story__read-more">Read more</button>
          </div>
        </div>
      </article>
    </section>
  )
}
export default TopStory
