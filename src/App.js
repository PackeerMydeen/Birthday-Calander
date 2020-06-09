import React,{useState, useEffect, memo} from 'react';
import './App.scss';
import WeekCard from './components/WeekCard'
import TextArea from './components/TextArea';
 

const weeks=['SUN','MON','TUE','WED','THU',"FRI",'SAT',]
const birthday=[
  {
    name:'Packeer',
    birthday:'10/04/1996'
  }, 
  {
    name:'Mydeen Maheen',
    birthday:'05/03/2000'
  },
  {
    name:'Rahul',
    birthday:'10/04/1996'
  },
  {
    name:'Raj',
    birthday:'10/04/1996'
  }, 
]

function App() {
  const [birthdays,setBirthDays]=useState([])
 
useEffect(() => {
  setBirthDays(birthday)
}, [])

 
  return (
    <div className="app-wrapper">
      <div className='weeks-wrapper'>
      {weeks.map(week=>{
        return(
          <div>
             <WeekCard week={week} birthdays={birthdays}/>
          </div>
        )
      })}
      </div>
      <div className='second-section'>
        <div className='text-box'>
          <TextArea obj={birthdays} onChange={e=>setBirthDays(e)}/>
          Copy and paste object, It allows only valid object *
        </div>
        {/* <div>
           <Dropdown title='Select year' options={getOption()} selected={selectedYear} dropdownSelected={dropdownSelected}/>
        </div> */}
      </div>
    </div>
  );
}

export default memo(App);
