export default function Resume() {

  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Shell Scripting",
    "CSS3",
    "HTML5",
    "React",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "Foundation",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Apollo",
    "Sequelize",
    "Mongoose",
    "GitHub",
    "GitLab",
    "Jest",
    "GitHub Actions",
    "Vite",
  ];
  return (
    <div>
      <h1>Resume</h1>
     <a href="https://docs.google.com/document/d/1k9vUFV7EVjn0LYbeZbUgjDeCZtz_SGaG/edit?usp=sharing&ouid=112861811330360594968&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Download My Resume</a>
      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// ul with links to downloadable resume and links to LinkedIn and GitHub profiles
// skills section with list of skills (ul tag with li children/elements for each skill)
