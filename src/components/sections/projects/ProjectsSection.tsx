import "./ProjectsSection.scss";

export default function ProjectsSection() {
  const data = [
    {
      title: "Kickoff by Zuju",
      description:
        "Zuju Kickoff gives you a whole new way to get in on the action while watching the English Premier League. Watch live match ball action, listen to live commentary, get cool stats and facts, and predict the action to score amazing rewards.",
      link: "https://zujukickoff.com/",
      previewBanner: "/assets/zuju-kickoff.webp",
      techStack: ["React JS", "NextJS", "Typescript", "GraphQL", "Material UI"],
    },
    {
      title: "blogbyai",
      description:
        "Exploring the possibilities of newly launched GPT-2 back then, I created this side-project to curate a platform featuring blog content, authored completely by generative AI models.",
      // link: "",
      previewBanner: "/assets/blogbyai.webp",
      techStack: ["GPT-2", "Python (flask)", "Mongo DB", "AppEngine (GCP)"],
    },
  ];
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>

          {data.map((project) => {
            return (
              <article key={project.title} className="row">
                <div className="project-wrapper__text">
                  {project.link ? (
                    <a href={project.link} target="_blank">
                      <h3 className="project-wrapper__text-title redirect-link">
                        {project.title}{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square ml-4"></i>
                      </h3>
                    </a>
                  ) : (
                    <h3 className="project-wrapper__text-title">
                      {project.title}
                    </h3>
                  )}
                  {/*{project.link && (*/}
                  {/*  <div className="project-wrapper__text-btns">*/}
                  {/*    <a*/}
                  {/*      href={project.link}*/}
                  {/*      target="_blank"*/}
                  {/*      rel="noopener noreferrer"*/}
                  {/*      className="cta-btn cta-btn--hero cta-btn--projects"*/}
                  {/*    >*/}
                  {/*      See Live*/}
                  {/*    </a>*/}
                  {/*    /!*<a href="#" target="_blank" className="cta-btn text-color-main">*!/*/}
                  {/*    /!*  Source Code*!/*/}
                  {/*    /!*</a>*!/*/}
                  {/*  </div>*/}
                  {/*)}*/}
                  <p className="project-wrapper__text-info">
                    {project.description}
                  </p>
                  <div className="experience-wrapper__text-btns">
                    {project.techStack.map((item) => (
                      <p key={item} className="skills">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="project-wrapper__image">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="thumbnail rounded">
                      <img
                        src={project.previewBanner}
                        className="img-fluid"
                        alt="Project Image"
                        // width="1366"
                        height="767"
                      />
                    </div>
                  </a>
                </div>
              </article>
            );
          })}

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
