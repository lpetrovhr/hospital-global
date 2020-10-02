import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../store/types';
import { fetchDataRequest } from '../../actions/user';
import { validateEmail, validatePassword } from '../../helpers/validator';

const LoginPageContainer: React.FunctionComponent = (): JSX.Element => {
  const ss = useSelector((state: User) => state);
  const dispatch = useDispatch();

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValidEmail(validateEmail(e.target.value));
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValidPassword(validatePassword(e.target.value));
  };

  const onFinish = () => {
    dispatch(fetchDataRequest());
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };

  return (
    <main>
      <Form
        layout={'vertical'}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
          validateStatus={isValidEmail ? 'success' : 'error'}
        >
          <Input size="large" onChange={onEmailChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              type: 'string',
              message: 'The input is not valid password!',
            },
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          validateStatus={isValidPassword ? 'success' : 'error'}
        >
          <Input.Password size="large" onChange={onPasswordChange} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            disabled={!isValidPassword || !isValidEmail}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default LoginPageContainer;
