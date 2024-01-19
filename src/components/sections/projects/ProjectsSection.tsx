import "./ProjectsSection.scss";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>

          {/*// <!-- Each .row is a project -->*/}
          <article className="row">
            <div className="project-wrapper__text">
              <h3 className="project-wrapper__text-title">Zuju Kickoff</h3>
              <p className="project-wrapper__text-info">
                Zuju Kickoff gives you a whole new way to get in on the action
                while watching the English Premier League. Watch live match ball
                action, listen to live commentary, get cool stats and facts, and
                predict the action to score amazing rewards.
              </p>
              <div className="project-wrapper__text-btns">
                <a
                  href="https://zujukickoff.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--hero cta-btn--projects"
                >
                  See Live
                </a>
                {/*<a href="#" target="_blank" className="cta-btn text-color-main">*/}
                {/*  Source Code*/}
                {/*</a>*/}
              </div>
            </div>

            <div className="project-wrapper__image">
              <a
                href="https://zujukickoff.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="thumbnail rounded">
                  <img
                    src="/assets/zuju-kickoff.png"
                    className="img-fluid"
                    alt="Project Image"
                    width="1366"
                    height="767"
                  />
                </div>
              </a>
            </div>
          </article>
          {/*// <!-- /END Project -->*/}

          {/*// <!-- Each .row is a project -->*/}
          {/*<article className="row">*/}
          {/*  <div className="project-wrapper__text">*/}
          {/*    <h3 className="project-wrapper__text-title">Project Title</h3>*/}
          {/*    <p className="project-wrapper__text-info">*/}
          {/*      Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
          {/*      Deleniti voluptas, sit nam perspiciatis tempore aspernatur ullam*/}
          {/*      necessitatibus impedit repellendus vero sed ipsa eos beatae ab*/}
          {/*      sint saepe nostrum! Enim, perferendis.*/}
          {/*    </p>*/}
          {/*    <div className="project-wrapper__text-btns">*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        target="_blank"*/}
          {/*        rel="noopener noreferrer"*/}
          {/*        className="cta-btn cta-btn--hero cta-btn--projects"*/}
          {/*      >*/}
          {/*        See Live*/}
          {/*      </a>*/}
          {/*      <a href="#" target="_blank" className="cta-btn text-color-main">*/}
          {/*        Source Code*/}
          {/*      </a>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="project-wrapper__image">*/}
          {/*    <a href="#" target="_blank" rel="noopener noreferrer">*/}
          {/*      <div className="thumbnail rounded">*/}
          {/*        <img*/}
          {/*          src="/assets/project.png"*/}
          {/*          className="img-fluid"*/}
          {/*          alt="Project Image"*/}
          {/*          width="1366"*/}
          {/*          height="767"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</article>*/}
          {/*// <!-- /END Project -->*/}

          {/*// <!-- Each .row is a project -->*/}
          {/*<article className="row">*/}
          {/*  <div className="project-wrapper__text">*/}
          {/*    <h3 className="project-wrapper__text-title">Project Title</h3>*/}
          {/*    <p className="project-wrapper__text-info">*/}
          {/*      Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
          {/*      Deleniti voluptas, sit nam perspiciatis tempore aspernatur ullam*/}
          {/*      necessitatibus impedit repellendus vero sed ipsa eos beatae ab*/}
          {/*      sint saepe nostrum! Enim, perferendis.*/}
          {/*    </p>*/}
          {/*    <div className="project-wrapper__text-btns">*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        target="_blank"*/}
          {/*        rel="noopener noreferrer"*/}
          {/*        className="cta-btn cta-btn--hero cta-btn--projects"*/}
          {/*      >*/}
          {/*        See Live*/}
          {/*      </a>*/}
          {/*      <a href="#" target="_blank" className="cta-btn text-color-main">*/}
          {/*        Source Code*/}
          {/*      </a>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="project-wrapper__image">*/}
          {/*    <a href="#" target="_blank" rel="noopener noreferrer">*/}
          {/*      <div className="thumbnail rounded">*/}
          {/*        <img*/}
          {/*          src="/assets/project.png"*/}
          {/*          className="img-fluid"*/}
          {/*          alt="Project Image"*/}
          {/*          width="1366"*/}
          {/*          height="767"*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</article>*/}
          {/*// <!-- /END Project -->*/}
        </div>
      </div>
    </section>
  );
}
