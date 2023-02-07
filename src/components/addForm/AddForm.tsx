import React, { useState } from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { async } from "@firebase/util";
import { METHODS } from "http";
import { type } from "os";

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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
      </Select>
    </Form.Item>
  );

  // Date of Birth
  // const config = {
  //   rules: [
  //     {
  //       type: "object" as const,
  //       required: true,
  //       message: "Please select Date of Birth!",
  //     },
  //   ],
  // };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    intro: "",
    gender: "Male",
    courses: "Web $ Mobile App Development",
    city: "Karachi",
    homeAddress: "",
  });

  let name, value;
  const onChangeHandler = (event: any) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // Firebase
  const submitData = async (event: any) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      fatherName,
      email,
      password,
      confirmPassword,
      phone,
      intro,
      gender,
      courses,
      city,
      homeAddress,
    } = userData;
    if (
      firstName && lastName && fatherName && email && password && confirmPassword &&
      phone && intro && gender && courses && city && homeAddress
    ) {
    
    const record = await fetch(
      "https://smit-portal-29dad-default-rtdb.firebaseio.com/StudentData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          fatherName,
          email,
          password,
          confirmPassword,
          phone,
          intro,
          gender,
          courses,
          city,
          homeAddress,
        }),
      }
    );
    if (record) {
      alert("Data successfully added");
      setUserData({
        firstName: "",
        lastName: "",
        fatherName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        intro: "",
        gender: "",
        courses: "",
        city: "",
        homeAddress: "",
      });
    } else {
      alert("Please fill the data");
    }
  }
  else {
    alert("Please fill the data");
  }
  };

  // const onFinish = (values: any) => {
  //   setUserData(values);
  //   console.log("Received values of form: ", values);
  // };

  // const handleSubmit =()=>{
  // const handleSubmit =()=>{
  //   form.getFieldValue('firstName');
  //   form.getFieldValue('lastName');
  //   form.getFieldValue('fatherName');
  //   form.getFieldValue('email');
  //   form.getFieldValue('password');
  //   form.getFieldValue('connfirmPassword');
  //   form.getFieldValue('phone');
  //   form.getFieldValue('dateOfBirtnn');
  //   form.getFieldValue('gender');
  //   form.getFieldValue('courses');
  //   form.getFieldValue('city');
  //   form.getFieldValue('intro');
  //   form.getFieldValue('homeAddress');
  //   form.getFieldValue('agreement');
  // }

  return (
    <>
      <div
        className="container"
        style={{ border: "1px", marginTop: "20px", padding: "10px" }}
      >
        <Form
          method="POST"
          {...formItemLayout}
          form={form}
          autoComplete="off"
          name="register"
          onFinish={(onFinish) => {
            console.log({ onFinish });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
          initialValues={{
            residence: ["Karachi", "Hayderabad", "Islamabad", "Faisalabad"],
            prefix: "+92",
          }}
          scrollToFirstError
        >
          <Form.Item {...tailFormItemLayout}>
            <h2> Please Fill Addmission Form </h2>
          </Form.Item>
          <Form.Item
            name={["firstName"]}
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please input your FirstName!",
                whitespace: true,
              },
            ]}
            hasFeedback
          >
            <Input
              style={{ height: "40px" }}
              className="test"
              value={userData.firstName}
              name="firstName"
              placeholder="First Name"
              onChange={onChangeHandler}
            />
          </Form.Item>
          <Form.Item
            name={["lastName"]}
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter your lastname!",
                whitespace: true,
              },
            ]}
            hasFeedback
          >
            <Input
              className="test"
              value={userData.lastName}
              name="lastName"
              placeholder="Last Name"
              onChange={onChangeHandler}
            />
          </Form.Item>
          <Form.Item
            name={["fatherName"]}
            label="Father Name"
            rules={[
              {
                required: true,
                message: "Please enter your fathername!",
                whitespace: true,
              },
            ]}
            hasFeedback
          >
            <Input
              className="test"
              value={userData.fatherName}
              name="fatherName"
              placeholder="Father Name"
              onChange={onChangeHandler}
            />
          </Form.Item>
          <Form.Item
            name={["email"]}
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The enter is not valid E-mail!",
              },
              {
                required: true,
                message: "Please erter your E-mail!",
              },
            ]}
            hasFeedback
          >
            <Input
              className="test"
              value={userData.email}
              name="email"
              placeholder="E-mail ID"
              onChange={onChangeHandler}
            />
          </Form.Item>

          <Form.Item
            name={["password"]}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
            hasFeedback
          >
            <Input
              className="test"
              value={userData.password}
              name="password"
              onChange={onChangeHandler}
              type="password"
              placeholder="Password."
            />
          </Form.Item>

          <Form.Item
            name={["confirmPassword"]}
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
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input
              className="test"
              value={userData.confirmPassword}
              name="confirmPassword"
              onChange={onChangeHandler}
              type="password"
              placeholder="Confirm Password."
            />
          </Form.Item>

          <Form.Item
            name={["phone"]}
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please enter your phone number!",
              },
              { min: 9 },
              { max: 13 },
            ]}
            hasFeedback
          >
            <Input
              className="test"
              value={userData.phone}
              name="phone"
              onChange={onChangeHandler}
              placeholder="Please enter your phone number."
            />
          </Form.Item>

          {/* <Form.Item 
          name="dateOfBirth" 
          label="Date of Birth" {...config}
          hasFeedback>
          <DatePicker placeholder="Chose date of birth" />
        </Form.Item> */}

          <Form.Item
            name={["intro"]}
            label="Intro"
            rules={[{ required: true, message: "Please input Intro" }]}
            hasFeedback
          >
            <Input
              className="test"
              value={userData.intro}
              name="intro"
              onChange={onChangeHandler}
              type="textarea"
              showCount
              maxLength={100}
              placeholder="Please enter your intro."
            />
          </Form.Item>

          <Form.Item
            name={["gender"]}
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
            hasFeedback
          >
            <Select
              value={userData.gender}
              onChange={onChangeHandler}
              className="test"
              placeholder="select your gender"
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={["courses"]}
            label="Courses"
            rules={[{ required: true, message: "Please select Course!" }]}
            hasFeedback
          >
            <Select
              value={userData.courses}
              className="test"
              onChange={onChangeHandler}
              placeholder="select your course"
            >
              <Option value="web&mobile">Web & Mobile</Option>
              <Option value="graphicsDesigning">Graphics Designing</Option>
              <Option value="aiChatBot">Ai Chat Bot</Option>
              <Option value="videoEditing">Video Eiditing</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={["city"]}
            label="City"
            rules={[{ required: true, message: "Please select City!" }]}
            hasFeedback
          >
            <Select
              value={userData.city}
              className="test"
              onChange={onChangeHandler}
              placeholder="select your CITY"
            >
              <Option value="karachi">Karachi</Option>
              <Option value="hyderabad">Hyderabad</Option>
              <Option value="islamabad">Islamabad</Option>
              <Option value="lahore">Lahore</Option>
              <Option value="faisalabad">Faisalabad</Option>
              <Option value="multan">Multan</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={["homeAddress"]}
            label="Home Address"
            rules={[
              {
                required: true,
                message: "Please Enter your Address here!",
              },
            ]}
            hasFeedback
          >
            <Input
              className="test"
              value={userData.homeAddress}
              name="homeAddress"
              onChange={onChangeHandler}
              placeholder="Enter your home address"
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Row>
              <Col span={14}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-sky-800"
                  onClick={submitData}
                >
                  Submit
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
    </>
  );
};

export default AddForm;
