export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row about-wrapper">
          <div className="about-wrapper__image">
            <img
              className="img-fluid"
              src="/assets/profile.png"
              alt="Profile Image"
              width="450"
              height="350"
            />
          </div>
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quae repellat, ad omnis distinctio velit saepe expedita
              architecto cumque veritatis adipisci. Sapiente non, saepe hic
              adipisci doloribus quisquam recusandae et.
            </p>
            <p className="about-wrapper__info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              obcaecati doloribus qui praesentium quae veniam esse mollitia
              consequuntur nisi minima quasi et fugit quidem enim recusandae
              delectus, iusto culpa rerum?
            </p>
            <span className="about-wrapper__cta">
              <a href="#" className="cta-btn cta-btn--resume">
                View Resume
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
