import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import CourseList from './components/CourseList'

function App() {

  const getMessage = ()=>{axios.get('/api/msg').then(res => 
    console.log(res.data))
  }
  useEffect(() => {
    getMessage();
  }, [])


  return (
    <>
      <div className="App">
        <h1>React App</h1>
      </div>
      <CourseList />
    </>
  )
}

export default App
