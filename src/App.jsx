import {useState, Fragment, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import User from './components/Card/User'
import List from './components/List/List'
import Terminal from './components/StateFull/Terminal'
import Nav from './components/Nav/NAv'
import { useFriendStatus } from './customhook'
import ChatPage from './components/Event'
import Dropdown from './components/Dropdown/Dropdown'
import Loading from './components/Loading/LoadingBar'
import { Button, TomatoButton } from './atoms/Button'
import Form from './components/Form/FOrm'
import NoportalExample from './portal/example/NoportalExample'
import PortalExample from './portal/example/PortalExample'
import { createPortal } from 'react-dom'
import Login from './Authorization/Login'
import UserForm from './AdvanceForm/UserForm'
import PrivateLayout from './layouts/PrivateLayout'
import PublicLayout from './layouts/PublicLayout'
import Countdown from './components/TimeUrl'

function App() {
 const {status, miniEvent} = useFriendStatus()
 const [loginState, setLoginState] = useState(false)
 const [isAuthorized, setAuthorized] = useState(false)

 useEffect(() => {
  fetch()
 })

  return (
    <Fragment>

      <Countdown/>
     {/* {isAuthorized? <PrivateLayout>
        <Login/>
      </PrivateLayout>
      :
      <PublicLayout>
        <Login/>
      </PublicLayout>} */}
    {/* <button onClick={() => setLoginState(prev => !prev)}>Show Login Page</button>
  {loginState && createPortal(
    <Login/>,document.body
  )} */}
  {/* <UserForm/> */}
    {/* <Form/> */}
    {/* <div className='clipping-container'>
    <NoportalExample/>
          </div> */}
    {/* <Button $borderColor={"white"} $background={"lightblue"}>Signup</Button> */}
    {/* <div className='clipping-container'>
    <PortalExample/>
    </div> */}
    {/* <TomatoButton onClick={() => alert("clicked")} $borderColor={"white"} $background={"purple"}>Login</TomatoButton> */}
    {/* <Loading width='40px' height='40px'/>
    <Loading width='50px' height='50px'/>
    <Loading width='60px' height='60px'/>
    <Loading width='70px' height='70px'/>
    <Button>Click</Button>
    <br/>
    <br/>
    <Button $borderColor={"white"} $background={"lightblue"}>Signup</Button>
    <TomatoButton onClick={() => alert("clicked")} $borderColor={"white"} $background={"purple"}>Login</TomatoButton> */}
    </Fragment>
  )
}

export default App
