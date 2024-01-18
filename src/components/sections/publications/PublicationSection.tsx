import "./PublicationSection.scss";

export default function PublicationSection() {
  return (
    <section id="publication">
      <div className="container">
        <h2 className="section-title">Publication</h2>
        <div className="contact-wrapper">
          <article className="row">
            <div className="project-wrapper__image">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="thumbnail rounded">
                  <img
                    src="/assets/project.png"
                    className="img-fluid"
                    alt="Project Image"
                    width="1366"
                    height="767"
                  />
                </div>
              </a>
            </div>

            <div className="project-wrapper__text">
              <h3 className="project-wrapper__text-title">Project Title</h3>
              <p className="project-wrapper__text-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti voluptas, sit nam perspiciatis tempore aspernatur ullam
                necessitatibus impedit repellendus vero sed ipsa eos beatae ab
                sint saepe nostrum! Enim, perferendis.
              </p>
              <div className="project-wrapper__text-btns">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero cta-btn--projects"
                >
                  See Live
                </a>
                <a href="#" target="_blank" className="cta-btn text-color-main">
                  Source Code
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
