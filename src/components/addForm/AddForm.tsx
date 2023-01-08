import React, { useState } from "react";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Option } = Select;

const residences = [
  {
    value: "Sindh",
    label: "Sindh",
    children: [
      {
        value: "karachi",
        label: "Karachi",
      },
      {
        value: "hayderabad",
        label: "Hayderabad",
      },
    ],
  },
  {
    value: "pungab",
    label: "Punjab",
    children: [
      {
        value: "Fiasalabad",
        label: "Faisalabad",
      },
      {
        value: "lahore",
        label: "Lahore",
      },
    ],
  },
];

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
    rules: [{ type: 'object' as const, required: true, message: 'Please select Date of Birth!' }],
  };
  
  return (
    <div className="container" style={{border:"1px",marginTop:"20px",padding:"10px"}}>
      <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["Karachi", "Hayderabad","Islamabad", "Faisalabad"],
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
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fathername"
        label="Father Name"
        tooltip="What is your father name"
        rules={[
          {
            required: true,
            message: "Please input your fathername!",
            whitespace: true,
          },
        ]}
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
            message: "Please input your phone number!",
            type: 'number', min: 11, max: 13
          },
        ]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item name="date-picker" label="Age" {...config}>
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true, message: "Please input Intro" }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
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
      >
        <Cascader options={residences} />
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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="*">

        </a>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Row gutter={8}>
          <Button type="primary" htmlType="submit">
          Register
        </Button>
      <Col span={12}>

      <HomeOutlined /><Button type="primary" className='bg-sky-800' >
        Back
        <a href="/" rel="">
        Back to Home
        </a>
      </Button>
        </Col >
      </Row>
      </Form.Item>
    </Form>
    </div>
  );
};

export default AddForm;
