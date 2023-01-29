import { Col, Divider, Row } from "antd";
import { Layout } from "antd";
import { Button, Form, Input, Descriptions } from "antd";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const onFinish = (values: any) => {
  console.log(values);
};

const styling: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginBottom: "25px",
}; 
const contact: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  }; 

export default function ContactUs() {
  return (
    <>
      <Layout>
        <Divider orientation="center">
          <div className="text-4xl">Contact Us</div>
        </Divider>
        <Row>
          <Col className="text-4xl" style={styling}>
            <img src="./images/contact.jpg" alt="contact-us Image" />
          </Col>
        </Row>
        <Col>
          <Row>
            <Col span={18}>
              <Form {...layout} name="nest-messages" onFinish={onFinish}>
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  rules={[{ type: "number", min: 0, max: 99 }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name={["user", "message"]} label="Message">
                  <Input.TextArea />
                </Form.Item>
              </Form>
              <Button
                type="primary"
                className="bg-sky-800 absolute bottom-0 right-0"
              >
                Submit
              </Button>
            </Col>
            <div style={contact}>
              <Col span={12}>
                <Descriptions title="Contact Details" layout="vertical">
                  <Descriptions.Item label="Telephone">
                    34900009
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    info@smit.com
                  </Descriptions.Item>
                  <Descriptions.Item label="Address" span={2}>
                    SMIT Building, Mumtaz Mobile Mall, Gulshan-e-Iqbal, Karachi
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </div>
          </Row>
         </Col>
      </Layout>
    </>
  );
}
