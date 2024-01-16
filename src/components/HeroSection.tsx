export default function HeroSection() {
  return (
    <div id="hero">
      <section className="container">
        <h1 className="hero-title">
          Hi, my name is <span className="text-color-main name">Shubham Bombarde</span>
          <br/>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a Software Developer.
        </h1>
        <p className="hero-cta">
          <a className="cta-btn cta-btn--hero" href="#about">Get in touch</a>
        </p>
      </section>
      <a href="#about" className="scroll-down-link" aria-label="scroll-down">
        <div className="scroll-down"></div
        >
      </a>
    </div>
  );
};