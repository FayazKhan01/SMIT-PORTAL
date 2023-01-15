import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
} from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AddForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select Date of Birth!",
      },
    ],
  };

  return (
    <div
      className="container"
      style={{ border: "1px", marginTop: "20px", padding: "10px" }}
    >
      <Form
        {...formItemLayout}
        form={form}
        autoComplete ="off"
        name="register"
        onFinish={(onFinish)=>{
          console.log({onFinish});
        }}
        onFinishFailed={(error)=>{
          console.log({error});
        }}
        initialValues={{
          residence: ["Karachi", "Hayderabad", "Islamabad", "Faisalabad"],
          prefix: "+92",
        }}
        scrollToFirstError
      >
        <Form.Item {...tailFormItemLayout}>
          <h1 className="center">Please Fill Addmission Form .</h1>
        </Form.Item>
        <Form.Item
          name="fullname"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please input your fullname!",
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fathername"
          label="Father Name"
          rules={[
            {
              required: true,
              message: "Please input your fathername!",
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
          
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!"},
              {type:"number"},
              {min: 9},
              {max: 13},
          ]}
          hasFeedback
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="date-picker" label="Date of Birth" {...config}
          hasFeedback>
          <DatePicker placeholder="Chose date of birth" />
        </Form.Item>

        <Form.Item
          name="intro"
          label="Intro"
          rules={[{ required: true, message: "Please input Intro" }]}
          hasFeedback
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
          hasFeedback
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="courses"
          label="Courses"
          rules={[{ required: true, message: 'Please select Course!' }]}
          hasFeedback
        >
          <Select placeholder="select your course">
            <Option value="web&mobile">Web & Mobile</Option>
            <Option value="graphicsDesigning">Graphics Designing</Option>
            <Option value="aiChatBot">Ai Chat Bot</Option>
            <Option value="videoEditing">Video Eiditing</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: 'Please select City!' }]}
          hasFeedback
        >
          <Select placeholder="select your CITY">
            <Option value="karachi">Karachi</Option>
            <Option value="hyderabad">Hyderabad</Option>
            <Option value="islamabad">Islamabad</Option>
            <Option value="lahore">Lahore</Option>
            <Option value="faisalabad">Faisalabad</Option>
            <Option value="multan">Multan</Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          name="residence"
          label="Home Address"
          rules={[
            {
              type: "array",
              required: true,
              message: "Please Enter your Address here!",
            },
          ]}
          hasFeedback
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Row>
            <Col span={14}>
            <Button type="primary" htmlType="submit" className="bg-sky-800">
              Register
            </Button>
            </Col>
            <Col>
              <Button type="primary" className="bg-sky-800">
                <a href="/" rel="">
                  Back to Home
                </a>
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddForm;
