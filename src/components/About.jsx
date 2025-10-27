import "./About.css";

function About({ name, age, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} className="avatar" />
      <div className="container">
        <h4>{name}</h4>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

export default About;
