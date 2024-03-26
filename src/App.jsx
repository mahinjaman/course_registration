import { useState } from 'react';
import './App.css'
import Course from './components/Course/Course'
import Selected from './components/Selected/Selected'

function App() {
  const [select, setSelect] = useState([]);
  let remainingHours = parseInt(document.getElementById('remainingHour'));
  let totalHours = parseInt(document.getElementById('totalHour'));
  let totalPrice = parseInt(document.getElementById('totalPrice'));

  const handleSelectCourse = (item) => {
    if(select.includes(item)){
      return (alert('Its Item Already Selected'))
    }
    else if (remainingHours < 0 || totalHours > 20){
      return (alert('You Have No Remaining Hours'))
    }
    else{
      const newSelectedCourse = [...select, item];
      setSelect(newSelectedCourse);
      remainingHours.innerText = parseInt(remainingHours) - 1;
      
    }
    
  }
  return (
    < >
    <h1 className='text-4xl my-10 text-center font-bold'>Course Registration</h1>
      <div className='xl:flex w-11/12 mx-auto gap-5'>
        <Course handleSelect={handleSelectCourse}></Course>
        <Selected course={select}></Selected>
      </div>
    </>
  )
}

export default App

