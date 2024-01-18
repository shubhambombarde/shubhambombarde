import "./ContactSection.scss";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            [Put your call to action here]
          </p>
          <a href="#" className="cta-btn cta-btn--resume">
            Call to Action
          </a>
        </div>
      </div>
    </section>
  );
}
