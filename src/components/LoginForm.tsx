import { Button, Col, Form, Input, Row } from "antd"
import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { rules } from "../utils/rules";
import type { IUser } from "../models/types";

export const LoginForm = () => {

    const { login } = useActions();
    const { isLoading, error } = useTypeSelector(state => state.auth)

    const handleSubmit = (values: IUser) => {
        login(values.username, values.password)  
    }

    return (
        <Form onFinish={handleSubmit} layout="vertical" >
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
            label='Username'
            name='username'
            rules={[rules.required('Please input your username! 👇' )]}
            >
                <Input />
            </Form.Item>

            <Form.Item
            label='Password'
            name='password'
            rules={[rules.required('Please input your password! 👇')]}>
                <Input.Password />
            </Form.Item>

            <Row justify='center'>
                <Col span={12}> 
                <Form.Item>
                    <Button type="primary" block
                    htmlType="submit" loading={isLoading}>Send</Button>
                </Form.Item>
            </Col>
            </Row>           
        </Form>
    )
}