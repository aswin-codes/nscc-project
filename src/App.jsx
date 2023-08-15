import './App.css'
import Members from './Screens/Members'
import { Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import Events from './Screens/Events'
import ErrorNotFound from './Screens/ErrorNotFound'

function App() {

  return (
    <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/teams' element={<Members/>}/>
      <Route path="*" element={<ErrorNotFound/>}></Route>
    </Routes>
  )
}

export default App
