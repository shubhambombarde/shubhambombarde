import "./ExperienceSection.scss";

function ExperienceItem(payload: {
  timeline: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string[];
  skillsList: string[];
}) {
  return (
    <article className="row">
      <div className="experience-wrapper__left-column">
        <p className="experience-wrapper__text-info">{payload.timeline}</p>
      </div>

      <div className="experience-wrapper__text">
        <h3 className="experience-wrapper__text-title">
          {payload.companyName}
        </h3>
        <h1 className="experience-wrapper__text-subtitle">
          {payload.jobTitle}
        </h1>
        <ul className="experience-wrapper__text-info">
          {payload.jobDescription.map((item) => (
            <li key={item}>
              <p dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
        <div className="experience-wrapper__text-btns">
          {payload.skillsList.map((item) => (
            <p key={item} className="skills">
              {item}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const data = [
    {
      timeline: "APRIL 2022 - PRESENT",
      companyName: "Kickoff by Zuju",
      jobTitle: "Software Developer",
      jobDescription: [
        "Deliver high quality, robust production code for '<a href='https://zujukickoff.com/' target='_blank' class='underline'>Kickoff by Zuju</a>'. Collaborate with cross-functional teams, including backend developers and designers, to ensure seamless integration and consistency across all platforms. Boosting website traffic by using a dynamic sitemap and pre-building associated pages in streamlined pipeline to minimise latency. Proactively make suggestions for tech stack enhancements.",
        // "Developing robust, user-friendly front-end features for both the user application and back-office systems, enhancing the user experience and operational efficiency.",
        // "Working closely with UX/UI designers to translate design wireframes into responsive and interactive web applications.",
        // "Collaborating and communicating with cross-functional teams, including backend developers and designers, to ensure seamless integration and consistency across the platform.",
        // "Dedicated to continuous learning, I stay abreast of the latest frontend trends and technologies, including Next JS features and the seamless integration of GitHub Copilot into workflow processes. Proactively making recommendations for tech stack enhancements.\n",
      ],
      skillsList: [
        "React JS",
        "NextJS",
        "Typescript",
        "Cypress",
        "GraphQL",
        "Zustand",
        "SEO",
      ],
    },
    {
      timeline: "MARCH 2021 - MARCH 2022",
      companyName: "TOKIGAMES",
      jobTitle: "Frontend Developer",
      jobDescription: [
        "Collaborated with the product and UI team to design an in-house soccer engagement platform with unique themes for various football clubs. Played a key role in scaling the platform, enhancing its overall performance, and maintaining comprehensive documentation for onboarding new team members, serving as a valuable knowledge base.",
        // "Developed robust and efficient front-end code for the company's platform, ensuring a seamless user experience. ",
        // "Implemented and optimized the user app, enhancing its performance and ensuring its alignment with business objectives. ",
        // "Proactively identified and resolved bottlenecks and bugs, employing strategic problem-solving techniques to minimize system downtime and enhance overall performance. ",
        // "Contributed to the creation and upkeep of documentation, assisting in onboarding new team members and serving as a knowledge base for ongoing development.",
      ],
      skillsList: ["React JS", "NextJS", "Typescript", "Cypress", "WebSockets"],
    },
    {
      timeline: "JULY 2019 - FEBRUARY 2021",
      companyName: "SEARCE",
      jobTitle: "Software Developer",
      jobDescription: [
        "Developed and maintained interactive web applications to cater to our clients' requirements while offering technical support for their specific needs.",
        // "Developed and maintained a robust platform for a movie production company, facilitating real-time tracking of progress, financials, and pre-production planning. ",
        // "Demonstrated proficiency in both frontend and backend development, ensuring efficient, testable, and scalable code. ",
        // "Collaborated closely with an overseas client, providing them with vital development assistance, and ensuring their project met stipulated benchmarks and quality standards.",
      ],
      skillsList: [
        "Angular",
        "React JS",
        "Mongo DB",
        "Python",
        "Data Visualisation",
      ],
    },
  ];
  return (
    <section id="experience">
      <div className="container">
        <div className="experience-wrapper">
          <div className="section-title-container">
            <p />
            <h2 className="section-title dark-blue-text">Experience</h2>
          </div>
          {data.map((item) => (
            <ExperienceItem key={item.timeline} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
