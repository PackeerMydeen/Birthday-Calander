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
    birthday:'11/09/2000'
  },
  {
    name:'Rahul',
    birthday:'05/15/2020'
  },
  {
    name:'Maji',
    birthday:'10/04/1996'
  }, 
]

function App() {
  const [birthdays,setBirthDays]=useState([])
  const [year,setYear]=useState('')
 
useEffect(() => {
  setBirthDays(birthday)
}, [])

 
  return (
    <div className="app-wrapper">
      <div className='weeks-wrapper'>
      {weeks.map(week=>{
        return(
          <div key={week}>
             <WeekCard  week={week} birthdays={birthdays} year={year}/>
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
          <input className='textInput' value={year} type='number' onChange={e=>setYear(e.target.value)}></input>
        </div>
      </div>
    </div>
  );
}

export default memo(App);
