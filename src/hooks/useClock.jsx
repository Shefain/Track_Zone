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
  PST: -8 * 60,
  EST: -5 * 60,
  EDT: -5 * 60,
  BST: 1 * 60,
  MST: -6 * 60,
};

function useClock(lable, timeZone, offset = 0) {
  const [state, setState] = useState({ ...init });
  const [utcTime, setUtcTime] = useState(null);

  useEffect(() => {
    const local_time = new Date();
    const local_offset = local_time.getTimezoneOffset();
    const utc_time = addMinutes(local_time, local_offset);
    setUtcTime(utc_time);
  }, []);

  useEffect(() => {
    if ((utcTime !== null) && timeZone) {
      offset = timeZone_offset[timeZone] ?? offset;
      const new_time = addMinutes(utcTime, offset);

      setState({
        ...state,
        date_utc: utcTime,
        date: new_time,
      
      });

    } else {
      
      setState({
        ...state,
        date_utc: utcTime,
        date: utcTime,
      });
    
    }
  }, [utcTime ,timeZone , offset]);

  return {
    clock: state,
  };
}
export default useClock;
