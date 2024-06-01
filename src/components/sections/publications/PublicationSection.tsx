import "./PublicationSection.scss";

export default function PublicationSection() {
  return (
    <section id="publication">
      <div className="container">
        <h2 className="section-title drop-shadow-2xl">Publication</h2>
        <div className="contact-wrapper">
          <article className="row">
            <div className="publication-wrapper__image">
              <div className="thumbnail rounded">
                <img
                  src="/assets/publication-cover-1.webp"
                  className="img-fluid"
                  alt="Project Image"
                  width="1366"
                  height="767"
                />
              </div>
            </div>

            <div className="publication-wrapper__text">
              <h3 className="publication-wrapper__text-title drop-shadow-2xl">
                Livability – Analysis of People’s Living Comfort in Different
                Cities of India Using GIS: A Prototype
              </h3>
              <p className="publication-wrapper__text-info drop-shadow-2xl">
                In this research paper, we propose a system for analyzing urban
                livability by creating a locality index based on comfort for
                different age groups. This system uses various indicators,
                including health, transport, climate, and more, to provide
                personalized results. It comprises a web interface and a Python
                backend that fetches data from sources like Google Maps and
                data.gov.in, processes it through cloud-based parallel
                computations, and presents the information to users via
                visualization charts.
              </p>
              <div className="publication-wrapper__text-btns">
                <span className="publication__cta">
                  <a
                    href="https://cardiffuniversitypress.org/site/chapters/e/10.18573/book3.u/"
                    target="_blank"
                    download="Resume-ShubhamBombarde"
                    className="cta-btn cta-btn--resume"
                  >
                    Cardiff University Press{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square ml-4"></i>
                  </a>
                </span>
              </div>
              <div className="publication-wrapper__text-btns mb-2">
                <span className="publication__cta">
                  <a
                    href="https://link.springer.com/chapter/10.1007/978-3-030-46540-7_5"
                    target="_blank"
                    download="Resume-ShubhamBombarde"
                    className="cta-btn cta-btn--resume"
                  >
                    Springer{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square ml-4"></i>
                  </a>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
