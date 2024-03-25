import { useState } from 'react';
import './App.css'
import Course from './components/Course/Course'
import Selected from './components/Selected/Selected'

function App() {
  const [select, setSelect] = useState([]);

  const handleSelectCourse = (item) => {
    const newSelectedCourse = [...select, item];
    setSelect(newSelectedCourse);
  }
  console.log(select);
  return (
    < >
    <h1>Course Registration</h1>
      <div className='md:flex'>
        <Course handleSelect={handleSelectCourse}></Course>
        <Selected></Selected>
      </div>
    </>
  )
}

export default App

