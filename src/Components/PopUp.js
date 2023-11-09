import React from 'react';
import Socials from './Socials';

const PopUp = () => {
  return (
    <div className="absolute -top-16 -left-28 z-20 flex gap-5 px-10 rounded-lg py-4 items-center bg-[#48556a]">
      <div className="absolute w-5 h-5 bg-[#48556a] z-10 -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45"></div>
      <p className="text-[#9eafc2] tracking-[5px] text-xs ">SHARE</p>
      <Socials />
    </div>
  );
};

export default PopUp;
