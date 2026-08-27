import { Card, Col, Layout, Row } from "antd"
import { LoginForm } from "../components/LoginForm"

export const Login = () => {

    return (
        <Layout>
            <Row justify='center' align='middle'
            style={{ minHeight: 'calc(100vh - 64px)'}}>
                <Col xs={22} sm={16} md={10} lg={8} >
                <Card title='Авторизация' hoverable style={{textAlign: 'center'}}>
                    <LoginForm />
                </Card>
                </Col>
            </Row>
        </Layout>
    )
}