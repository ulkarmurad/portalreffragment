import { useState, useEffect } from 'react';

export default function Countdown() {
  const [countdown, setCountdown] = useState(60);
  const [dowland, setDowland] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {

      setDowland(true);
    }
  }, [countdown]);

  return (
    <div>
      {dowland ? <a href='https://giphy.com/gifs/excited-birthday-yeah-yoJC2GnSClbPOkV0eA/fullscreen'>Download</a> : <h2>{ `${countdown} seconds`}</h2>}
    </div>
  );
};
