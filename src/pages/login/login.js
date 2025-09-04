import { Button, Form, Input } from 'antd';

const Login = ({ setLoginUser }) => {
  const onFinish = values => {
    setLoginUser(values);
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <Form
          name='normal-login'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: '100%' }}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder='Username' />
          </Form.Item>

          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input placeholder='Email' />
          </Form.Item>

          <Form.Item>
            <Button type='primary' style={{ width: '100%' }} htmlType='submit'>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
