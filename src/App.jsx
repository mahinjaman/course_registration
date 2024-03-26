import { useState } from 'react';
import './App.css'
import Course from './components/Course/Course'
import Selected from './components/Selected/Selected'

function App() {
  const [select, setSelect] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectCourse = (item) => {
    
    if(select.includes(item)){
      return (alert('Its Item Already Selected'))
    }
    else{
      const newSelectedCourse = [...select, item];
      let newRemainingCredit = remainingCredit - item.credit;
      let newTotalCredit = totalCredit + item.credit;
      let newTotalPrice = totalPrice + item.price;
      if(newRemainingCredit < 0 || newTotalCredit > 20){
        return (alert('You Have No space to remaining credit'))
      }
      setSelect(newSelectedCourse);
      setRemainingCredit(newRemainingCredit);
      setTotalCredit(newTotalCredit );
      setTotalPrice(newTotalPrice);
      
    }
    
  }


  
  return (
    < >
    <h1 className='text-4xl my-10 text-center font-bold'>Course Registration</h1>
      <div className='xl:flex w-11/12 mx-auto gap-5'>
        <Course handleSelect={handleSelectCourse}></Course>
        <Selected course={select} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice}></Selected>
      </div>
    </>
  )
}

export default App

