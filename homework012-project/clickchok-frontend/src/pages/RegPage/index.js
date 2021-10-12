// import React from "react";
import React, { useState } from "react";
import { isLoggedIn } from "axios-jwt";
import {
  Form,
  Input,
  Button,
  // Checkbox,
  // Modal
} from "antd";
import {
  // useLocation,
  useHistory,
  Redirect,
  // Route,
  NavLink,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

// https://automizy.com/blog/registration-confirmation-emails/
// https://automizy.com/blog/confirmation-email-examples/
// https://www.studentnewsdaily.com/thank-you-for-signing-up-for-the-email/
// Please check your email for a confirmation link

library.add(fas);
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

const RegPage = () => {
  // const [visible, setVisible] = useState(true);

  const [form] = Form.useForm();

  let history = useHistory();
  if (isLoggedIn()) {
    return <Redirect to={"/"} />;
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // let tempY = window.scrollY;

  const handleCancel = () => {
    //history.back(2);
    //history.push("/");

    // const scrollY = document.body.style.top;
    // document.body.style.position = "";
    // document.body.style.top = "";
    // window.scrollTo(0, parseInt(scrollY || "0") * -1);

    window.history.back();

    console.log("handleCancel");
    return;
    // const scrollY = document.body.style.top;
    // document.body.style.position = "";
    // document.body.style.top = "";
    // window.scrollTo(0, parseInt(scrollY || "0") * -1);
    // document.body.style.width = "100%";
    // setVisible(false);
    //console.log(pathname);

    // history.push(pathname);
    // <Redirect to={"/news/"} />;
    //window.history.back();
    //window.location
  };

  // if (visible) {
  //   showModal();
  // }

  const onReset = () => {
    form.resetFields();
  };

  if (history || useState) {
  }

  //Fix Position Render
  document.body.style.position = "";
  document.body.style.top = "";

  return (
    <>
      <div className="login-page">
        <button
          type="button"
          aria-label="Close"
          className="ant-modal-close"
          style={{ right: "unset", left: 0 }}
          onClick={() => handleCancel()}
        >
          <span className="ant-modal-close-x">
            <span
              role="img"
              aria-label="close"
              className="anticon anticon-close ant-modal-close-icon"
            >
              <FontAwesomeIcon
                icon={["fas", "arrow-left"]}
                style={{
                  opacity: 0.8,
                }}
              />
            </span>
          </span>
        </button>
        <div className="ant-modal-header">
          <div className="ant-modal-title" style={{ textAlign: "center" }}>
            ลงทะเบียน
          </div>
        </div>
        {/* <Modal
          // centered
          title={"เข้าสู่ระบบ"}
          visible={visible}
          // onOk={() => handleCancel()}
          onCancel={() => handleCancel()}
          width={414}
          bodyStyle={{
            // height: "calc(100vh - 120px)",
            padding: 8,
            margin: 0,
            height: "calc(100%)",
          }}
          style={{ top: 0, margin: 0 }}
          footer={[]}
          className="main-menu-modal"
        >
          
        </Modal> */}
        <div className="login-section" style={{ padding: 10, maxWidth: 414 }}>
          <div>
            <h1 style={{ fontSize: 31 }}>
              <span>Sign up to ClickChok</span>
            </h1>
          </div>
          <Form
            {...layout}
            // layout="vertical"
            form={form}
            name="control-hooks"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="form-login-page"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please input confirm password!" },
              ]}
            >
              <Input.Password />
            </Form.Item> */}

            {/* <Form.Item
              name="remember"
              valuePropName="checked"
              style={{ margin: "4px 0" }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", marginTop: 6 }}
              >
                Submit
              </Button>
            </Form.Item>

            <Form.Item className="login-btn-option">
              <Button
                htmlType="button"
                onClick={onReset}
                style={{ minWidth: "30%" }}
              >
                Reset
              </Button>
              {/* <Button
                htmlType="button"
                onClick={handleCancel}
                style={{ marginRight: 8 }}
              >
                Back
              </Button> */}
              <NavLink to="/login/">
                <Button
                  type="link"
                  htmlType="button"
                  style={{ maxWidth: "fit-content" }}
                >
                  Log in
                </Button>
              </NavLink>

              <Button
                type="link"
                htmlType="button"
                style={{ maxWidth: "fit-content" }}
              >
                Forgot password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RegPage;
