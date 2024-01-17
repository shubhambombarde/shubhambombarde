export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#hero" className="back-to-top" aria-label="go back to top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="codepen"
          >
            <i className="fa-brands fa-codepen"></i>
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="#!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        {/*<hr/>*/}
        {/*<p className="footer__text">*/}
        {/*  &copy; 2024 - Template by*/}
        {/*  <a*/}
        {/*    href="https://github.com/AnilSeervi"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >Anil Seervi</a*/}
        {/*  >. <br/>Made with &hearts;*/}
        {/*</p>*/}
      </div>
    </footer>
  );
}
