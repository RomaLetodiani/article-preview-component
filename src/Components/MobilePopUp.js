import React from 'react';
import Socials from './Socials';
import ShareButton from './ShareButton';

const MobilePopUp = ({ setShowPopUp, isAboveMediumScreens, showPopUp }) => {
  return (
    <div className="flex items-center justify-between bg-[#48556a] w-full h-16 px-4 min-[400px]:px-10 rounded-es-2xl rounded-ee-2xl absolute left-0 bottom-0">
      <div className="flex gap-5">
        <p className="text-[#9eafc2] tracking-[5px] text-xs ">SHARE</p>
        <Socials />
      </div>
      <ShareButton
        setShowPopUp={setShowPopUp}
        isAboveMediumScreens={isAboveMediumScreens}
        showPopUp={showPopUp}
      />
    </div>
  );
};

export default MobilePopUp;
