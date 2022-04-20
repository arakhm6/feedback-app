import Card from "../components/shared/Card";

function AboutSection() {
  return (
    <Card>
      <div className="about">
        <h1>About This App</h1>
        <p>This is a React app to leave feedback</p>
        <p>Version: 1.0.0</p>
        <p>
          <a href="/">Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutSection;
