import { addMinutes } from 'date-fns';
import { useState , useEffect} from 'react';

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
  PST: 4*60,
  EST: 7*60,
};

function useClock(lable,timeZone, offset=0) {
  const [state, seState] = useState({ ...init });


    useEffect(()=>{
        let utc = new Date();

        const localOffset = utc.getTimezoneOffset()
        utc = addMinutes(utc,localOffset)
        console.log(utc);

        if(timeZone){
            if(timeZone==="PST" || timeZone==="EST"){
              offset = timeZone_offset[timeZone] 
            }
        }else{
            offset = utc.getTimezoneOffset()
            
        }
        utc = addMinutes(utc, offset)
        console.log( lable,utc.toLocaleString());

    },[timeZone,offset])







//   useEffect(() => {
//     let utc = new Date();
//     if (timeZone) {
//       if (timeZone === 'PST' || timeZone === 'EST') {
//         const localOffset = timeZone_offset[timeZone] ?? offset;
//         utc = addMinutes(utc, localOffset);
//       }
//     } else {
//       const offset = utc.getTimezoneOffset();
//       utc = addMinutes(utc, offset);
//     }

//     seState({
//       ...state,
//       date_utc: utc,

//     });
//   }, []);

  return {
    clock: state,
  };
}

export default useClock;
