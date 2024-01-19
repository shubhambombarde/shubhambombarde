import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#hero" className="back-to-top" aria-label="go back to top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          {/*<a*/}
          {/*  href="#!"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*  aria-label="twitter"*/}
          {/*>*/}
          {/*  <i className="fa-brands fa-twitter"></i>*/}
          {/*</a>*/}
          {/*<a*/}
          {/*  href="https://www.instagram.com/shubhambombarde/"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*  aria-label="instagram"*/}
          {/*>*/}
          {/*  <i className="fa-brands fa-instagram"></i>*/}
          {/*</a>*/}
          {/*<a*/}
          {/*  href="#!"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*  aria-label="codepen"*/}
          {/*>*/}
          {/*  <i className="fa-brands fa-codepen"></i>*/}
          {/*</a>*/}
          <a
            href="https://www.linkedin.com/in/shubhambombarde/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/shubhambombarde/shubhambombarde"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="mailto: shubhambombarde4@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <hr />
        <p className="footer__text mt-8">
          Coded in{" "}
          <a href="https://www.jetbrains.com/webstorm/?var=1" target="_blank">
            WebStorm
          </a>{" "}
          by yours truly. Built with{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a href="https://vercel.com/" target="_blank">
            Vercel
          </a>
          .{/*&copy; 2024 - Template by*/}
          {/*<a*/}
          {/*  href="https://github.com/AnilSeervi"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>Anil Seervi</a*/}
          {/*>. <br/>Made with &hearts;*/}
        </p>
      </div>
    </footer>
  );
}
