import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { login } from "../../action/userActions";
import Todo from "../Todo/Todo";

const Home = () => {
  const user = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log(values);
    const { username, password } = values;
    if (username && password) {
      dispatch(login({ username, password }));
      navigate("/");
    }
  };

  return (
    <div className="home">
      {user.username && user.password ? (
        <Todo />
      ) : (
        <>
          <h1>Đăng nhập</h1>
          <Form name="normal_login" className="login-form" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or{" "}
              <a onClick={() => navigate("/register")} href="#">
                register now!
              </a>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default Home;
