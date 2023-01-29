import React from "react";
import { Row, Col, Button } from "antd";

const contentStyle: React.CSSProperties = {
  backgroundColor: "rgba(182,239,73,.2)",
  paddingBottom: "40px",
};

const p: React.CSSProperties = {
  padding: "15px 10% 15px 10%",
  fontSize: "15px",
  textAlign: "center",
  paddingBottom: "20px",
};
const button: React.CSSProperties = {
  marginBottom: "15px",
  fontSize: " 18px",
  lineHeight: "0.3333333",
  marginLeft: "90%",
};

const content1: React.CSSProperties = {
  margin: "30px 10% 30px 10%",
};

const content1h1: React.CSSProperties = {
  fontSize: "40px",
  paddingBottom: "20px",
};
const About = () => {
  return (
    <>
      <div>
        <img src="./images/logo.png" alt="aboutImage" />
      </div>
      <div style={content1}>
        <h1 style={content1h1}>About Us</h1>
        <p>
          Saylani Welfare International Trust has been working for the last 22
          years to improve the conditions of the less privileged, helpless, and
          handicapped individuals. The organization is working day and night to
          make life happier, especially for the middle class, lower middle class
          and even lower class. At time of establishing the organization, the
          founder of Saylani Welfare International Trust and a few of his
          associates had made a commitment to serve the distressed people living
          in Pakistan and abroad in all stages of life. It is a blessing in
          disguise that today the organization is serving humanity in more than
          63 areas of life without any discrimination. 
          The soul, founder and patron of this organization is Maulana Muhammad 
          Bashir Farooqi. He is also a well-known spiritual person and Islamic scholar in the Islamic
          world. It is the result of his efforts that today Saylani Welfare
          International Trust is serving humanity all over the world.<br/>
          Saylani Mass Training & Job creation Program is DevBootcamp , which calls
          itself an “apprenticeship on steroids, ” is one of a new breed of
          computer programming school that’s proliferating in San Francisco and
          other US tech hubs. These “hacker boot camps ” promise to teach
          students how to write code in two or three months and help them get
          hired as web developers, with starting salaries between $500 – $1000,
          often within days or weeks of graduation. We’re focused on extreme
          employ ability.
        </p>
      </div>
      <div style={content1}>
        <h1 style={content1h1}>Our Aim</h1>
        <p>
          Saylani Mass Training has trained about 500 students, and 95 percent
          of them have been hired as software developers within a few months pf
          graduation . Its now opening campus in all over Pakistan. <br />
          The target is to train 10,000 Mobile and cloud software developers
          each year , for the next five years. This will generate additional
          50,000 support jobs each year . It is projected that it will inject at
          least $100,000 per year into the Pakistan Economy. In total it will
          increase exports by $ 1 billion each year.
        </p>
      </div>
      <Row>
        <Col>
          <Button type="primary" style={button} className="bg-sky-800">
            <a href="https://www.saylaniwelfare.com" rel="">
              Contact Us
            </a>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default About;
