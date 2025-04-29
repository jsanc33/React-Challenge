import josephAndDad from "../../assets/joseph-and-dad.jpg";
import "./about.css";

const style = {
  imgStyle: {
    width: "30%",
  },
  flexBoxTurnOn: {
    display: "flex",
  },
};

export default function About() {
  return (
    <div className="about-flex" style={style.flexBoxTurnOn}>
      <h1>About Me</h1>
      <div style={style.flexBoxTurnOn}>
        <img
          src={josephAndDad}
          alt="Joseph and his son"
          style={style.imgStyle}
        />
        <p>
          Hi, I’m Joseph Sanchez, a full stack software developer with a passion
          for creating innovative solutions. I’m currently based in San Antonio,
          Texas, where I live with my son.
        </p>
      </div>
      <div style={style.flexBoxTurnOn}>
        <p>👨‍👦 I'm a proud dad — it's the most important title I hold.</p>
        <p>
          💼 I work full-time at H-E-B, one of the busiest grocery companies
          around, keeping things running and shelves stocked.
        </p>
        <p>
          🎓 On top of that, I’m diving deep into full stack software
          development — learning to build the future one line of code at a time.
        </p>
        <p>
          ⚾ When I'm not coding or working, you’ll find me coaching my
          six-year-old’s baseball team — little league legends in the making!
        </p>
        <p>
          💙 My son is six years old, and he’s my whole world. Everything I do,
          I do with him in mind.
        </p>
      </div>
    </div>
  );
}
// Photo or avatar of the user + short bio about user
