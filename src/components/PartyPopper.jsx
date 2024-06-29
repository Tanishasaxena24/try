
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import {Link} from 'react-router-dom'
import { FaCakeCandles } from "react-icons/fa6";
import { FaRegKissWinkHeart } from "react-icons/fa";

const PartyPopper = () => {
  const { width, height } = useWindowSize();
  const [confettiKey, setConfettiKey] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setConfettiKey(Date.now());
    }, 5000); // Restart confetti every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymVYjOxCxBm0EWZ8B_LmsL5GTxrGwxuzRAQ&s")] bg-no-repeat h-screen bg-cover'>
    <div className="relative w-full h-screen">
      <Confetti
        key={confettiKey}
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={200}
      />
       <div className='flex justify-center items-center'>
      <h1 className='p-10 font-bold text-4xl text-red-800 flex'>HAPPY HARSH DAY<FaCakeCandles className='ml-5'/>
      </h1>
      
      </div>
      <div className='flex justify-center items-center'>
      <h1 className='font-semibold text-3xl text-red-600 mt-7 flex'>Aapse bahut piyaar krte hai hum khikhi<FaRegKissWinkHeart className='ml-5'/>
      </h1>
      
      </div>
      <div className='flex items-center justify-center mt-10'>
       <img src="/ht.png" alt="" className='h-[70vh]  ' />

       </div>
    </div>
    </div>
    </>
  );
};

export default PartyPopper;
