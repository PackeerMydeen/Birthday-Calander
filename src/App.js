import React,{useState, useMemo, useEffect, memo} from 'react';
import './App.scss';
import WeekCard from './components/WeekCard'
import TextArea from './components/TextArea';
import Dropdown from './components/Dropdown'

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
  const [selectedYear,setSelectedYear]=useState(1996)
  const [birthdays,setBirthDays]=useState([])
 
useEffect(() => {
  setBirthDays(birthday)
}, [])

const getOption=()=>{
  return [...new Set(birthdays.map(el=>el.birthday.split('/')[2]))]
}

const getBirthDays= useMemo(()=>{
  return birthdays.filter(el=>Number(el.birthday.split('/')[2])===Number(selectedYear))
},[birthdays,selectedYear])
  
const dropdownSelected=(e)=>{
  setSelectedYear(e)
}
  return (
    <div className="app-wrapper">
      <div className='weeks-wrapper'>
      {weeks.map(week=>{
        return(
          <div>
             <WeekCard week={week} birthdays={getBirthDays}/>
          </div>
        )
      })}
      </div>
      <div className='second-section'>
        <div className='text-box'>
          <TextArea obj={birthdays} onChange={e=>setBirthDays(e)}/>
          Copy and paste object, It allows only valid object *
        </div>
        <div>
           <Dropdown title='Select year' options={getOption()} selected={selectedYear} dropdownSelected={dropdownSelected}/>
        </div>
      </div>
    </div>
  );
}

export default memo(App);
