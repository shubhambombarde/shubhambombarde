import "./AboutSection.scss";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title drop-shadow-2xl">About Me</h2>
        <div className="row about-wrapper">
          <div className="about-wrapper__image">
            <img
              className="img-fluid"
              src="/assets/profile.jpeg"
              alt="Profile Image"
              width="450"
              height="350"
            />
          </div>
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text drop-shadow-2xl">
              I am a seasoned <b>Software Developer</b> with nearly 5 years of
              expertise in crafting exceptional frontend features using{" "}
              <b>React</b>
              <b>(Next JS)</b>, <b>GraphQL</b>, and <b>TypeScript</b>. My
              ability to excel in technical aspects and effectively execute
              tasks ensures product quality. I excel in collaborative
              environments, communicating complex concepts effectively.
            </p>
            <span className="about-wrapper__cta">
              <a
                href="/assets/Resume-ShubhamBombarde.pdf"
                download="Resume-ShubhamBombarde"
                className="cta-btn cta-btn--resume"
              >
                Download Resume
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}