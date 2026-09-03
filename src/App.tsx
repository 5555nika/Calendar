import './App.css'
import { Layout} from 'antd'
import { Navbar } from './components/Navbar'
import { AppRouter } from './components/AppRouter'
import { useEffect } from 'react'
import { useActions } from './hooks/useActions'
import type { IUser } from './models/types'


export const App = () => {

  const { setUser, setIsAuth } = useActions()
  
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('user') || '', password: ''} as IUser)
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout>
      <Layout.Header>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
      <AppRouter />
      </Layout.Content>
    </Layout>
  )
}
