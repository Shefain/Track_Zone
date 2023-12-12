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

const TIMEZONE_OFFSET = {
  PST: -8 * 60,
  EST: -5 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: -7 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [state, setState] = useState(() => init);
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    const d = new Date();
    const localOffset = d.getTimezoneOffset();
    const adjustedDate = addMinutes(d, localOffset);
    setUtc(adjustedDate);
  }, []);

  useEffect(() => {
    if (utc !== null && timezone && TIMEZONE_OFFSET[timezone] !== undefined) {
      setState(prevState => ({
        ...prevState,
        date_utc: utc,
        date: addMinutes(utc, TIMEZONE_OFFSET[timezone] + offset),
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        date_utc: utc,
        date: utc,
      }));
    }
  }, [utc, timezone, offset]);

  return {
    clock: state,
  };
};

export default useClock;
