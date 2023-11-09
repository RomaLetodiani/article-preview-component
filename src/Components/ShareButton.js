import React from 'react';
import PopUp from './PopUp';
import { FaShare } from 'react-icons/fa';

const ShareButton = ({ setShowPopUp, isAboveMediumScreens, showPopUp }) => {
  return (
    <button
      onClick={() => setShowPopUp((prev) => !prev)}
      className="relative rounded-full text-[13px] p-2 bg-[#ecf2f8]"
    >
      <FaShare />
      {isAboveMediumScreens && showPopUp && <PopUp />}
    </button>
  );
};

export default ShareButton;
