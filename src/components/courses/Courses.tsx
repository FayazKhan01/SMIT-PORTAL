import { Button, Col, Divider, Row, Image, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const style: React.CSSProperties = {
  background: "#fff",
  padding: "8px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
};

function Courses() {
  return (
    <div>
      <Divider orientation="center">
        <div className="text-4xl">Courses SMIT Offered</div>
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<Image src="./images/web&mob.png" />}
            >
              <Meta
                title="Web & Mobile app Development"
                
              />
              <br />
              <Link to="/Addmission-form">
              <Button block type="primary" className="bg-sky-800">
                Enroll
              </Button>
              </Link>
            </Card>
          </div>
        </Col>
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<Image src="./images/graphics.jpg" />}
            >
              <Meta
                title="Graphics Designing "
              />
              <br />
              <Link to="/Addmission-form">
              <Button block type="primary" className="bg-sky-800">
                Enroll
              </Button>
              </Link>
            </Card>
          </div>
        </Col>
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<Image src="./images/video-editing.jpg" />}
            >
              <Meta
                title="Video Editing"
              />
              <br />
              <Link to="/Addmission-form">
              <Button block type="primary" className="bg-sky-800">
                Enroll
              </Button>
              </Link>
            </Card>
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<Image src="./images/CCNA1.jpg" />}
            >
              <Meta title="CCNA"  />
              <br />
              <Link to="/Addmission-form">
              <Button block type="primary" className="bg-sky-800">
                Enroll
              </Button>
              </Link>
            </Card>
          </div>
        </Col>
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<Image src="./images/Ai-chatbot.jpg" />}
            >
              <Meta title="AI Chatbot"/>
              <br />
              <Link to="/Addmission-form">
              <Button block type="primary" className="bg-sky-800">
                Enroll
              </Button>
              </Link>
            </Card>
          </div>
        </Col>
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<Image src="./images/mobile repairing.jpg" />}
            >
              <Meta title="Mobile Repairing"/>
              <br />
              <Link to="/Addmission-form">
              <Button block type="primary" className="bg-sky-800">
                Enroll
              </Button>
              </Link>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Courses;
