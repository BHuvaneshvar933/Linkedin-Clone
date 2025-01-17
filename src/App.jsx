import { useState } from 'react'
import NavBar from './components/NavBar'
import ContainerLeft from './components/HomeContainerLeft'
import ContainerMain from './components/HomeContainerMain'
import ContainerRight from './components/HomeContainerRight'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Network from './pages/Network'
import Jobs from './pages/Jobs'
import Messaging from './pages/Messaging'
import Notifications from './pages/Notifications'
function App() {
  const [count, setCount] = useState(0)

  return (
   
      <Router>
      <NavBar />
      <div className='h-14'></div>
      <Routes>
      <Route path="/" element={
      <div className='  py-5  flex flex-wrap ' id='container'>
      <ContainerLeft/>
      <ContainerMain/>
      <ContainerRight/>
      </div>
       } />
       <Route path="/my-network" element={<Network/>}/>
       <Route path="/jobs" element={<Jobs/>}/>
       <Route path='/messaging' element={<Messaging/>}/>
       <Route path="/notifications" element={<Notifications/>}/>
      </Routes>
      </Router>
   
  )
}

export default App
