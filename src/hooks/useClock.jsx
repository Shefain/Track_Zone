import { addMinutes } from 'date-fns';
import { useState, useEffect } from 'react';

const init = {
  id: '',
  title: '',
  timezone: {
    type: '',
    offset: '',
  },
  date_utc: null,
  date: null,
};

const timeZone_offset = {
  EST: 7 * 60,
  PST: 4 * 60,
};

function useClock(lable, timeZone, offset = 0) {
  const [state, seState] = useState({ ...init });

  useEffect(()=>{
    let utc = new Date();
    const localOffset = utc.getTimezoneOffset()
    utc = addMinutes(utc,localOffset)

    if(timeZone !== "UTC" && timeZone === "PST" ||timeZone === "EST" ){
      offset = timeZone_offset[timeZone]
      
    }
    utc = addMinutes(utc, offset)
    
    console.log(lable, utc.toLocaleString());
  },[timeZone,offset])

  return {
    clock: state,
  };
}

export default useClock;
