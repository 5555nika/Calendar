import { Menu, Row } from "antd"
import { useActions } from "../hooks/useActions"
import { useNavigate } from "react-router-dom"
import { RouteNames } from "../routes"
import { useTypeSelector } from "../hooks/useTypeSelector"

export const Navbar = () => {

    const { logout } = useActions()
    const { isAuth, user } = useTypeSelector(state => state.auth)
    const navigate = useNavigate()

    const handleClick = ({key}: {key: string}) => {
        if (key === 'login') {
            navigate(RouteNames.LOGIN)
        } else if (key === 'logout') {
            logout()
        }
    }

    return (
        <Row justify='end'>
            <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            onClick={handleClick}
            items={isAuth 
                ? [
                    { key: 'user', label: user.username , disabled: true },
                    { key: 'logout', label: 'Выйти'}
                ]: [
                    { key: 'login', label: 'Войти'}
                ]}
            />
        </Row>
    )

}