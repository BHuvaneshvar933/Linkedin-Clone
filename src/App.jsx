import { useState } from 'react'

import NavBar from './components/NavBar'
import ContainerLeft from './components/ContainerLeft'
import ContainerMain from './components/ContainerMain'
import ContainerRight from './components/ContainerRight'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar />
      <div className='h-14'></div>
      <div className='  py-5  flex flex-wrap ' id='container'>
      <ContainerLeft/>
      <ContainerMain/>
      <ContainerRight/>
      </div>
    </>
  )
}

export default App
