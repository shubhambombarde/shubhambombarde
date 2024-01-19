import "./HeroSection.scss";
export default function HeroSection() {
  return (
    <div id="hero">
      <section className="container">
        <h1 className="hero-title">
          Hi, my name is{" "}
          <span className="text-color-main name">Shubham Bombarde</span>
        </h1>
        <h3 className="hero-sub-title">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a <b>Software Developer</b>.
        </h3>
        <h5 className="hero-sub-title">
          I build pixel-perfect, accessible products for the web and beyond.
        </h5>
        <p className="hero-cta">
          <a className="cta-btn cta-btn--hero" href="#about">
            Get in touch
          </a>
        </p>
      </section>
      <a href="#about" className="scroll-down-link" aria-label="scroll-down">
        <div className="scroll-down"></div>
      </a>
    </div>
  );
}
