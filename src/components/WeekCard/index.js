import React,{memo} from 'react';
import './index.scss'
import BirthDayCard from '../BirthdayCard';

const weeks=['SUN','MON','TUE','WED','THU',"FRI",'SAT',]

function WeekCard(props) {
    console.log(props)
    function calcWidth(length){
        if(length===0) return 0
         if(length< 2){
            return 100
        }
        else if(length< 7){
            return 50
        }
        else if(length<20){
            return 33.33
        }
        return  25

    }
 const getBirthday=()=>{
   let daysinWeek= props.birthdays && props.birthdays.filter(item=>getDay(item.birthday)===props.week)
   return daysinWeek
 }
 const getDay=(date)=>{
    return weeks[new Date(date).getDay()]
  }

  const getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};
let bdayInWeek=getBirthday()
let width= calcWidth(bdayInWeek.length)
    return (
        <div className='card-wrapper'>
            <div className='card-header'>
               {props.week}
            </div>
            <div className='card-body'>
           { bdayInWeek.map(birthday=>{
               let initials=getInitials(birthday.name)
               return <BirthDayCard width={width} initials={initials}/>
           })
           }
            </div>  
        </div>
    )
}

export default memo(WeekCard)