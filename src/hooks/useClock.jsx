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
  const [state, seState ] = useState({ ...init });






  return {
    clock : state
  };
}

export default useClock;
