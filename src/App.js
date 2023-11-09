import React, { useState } from 'react';
import drawers from './images/drawers.jpg';
import avatar from './images/avatar-michelle.jpg';
import useMediaQuery from './Hooks/useMediaQuery';
import ShareButton from './Components/ShareButton';
import MobilePopUp from './Components/MobilePopUp';

const App = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const isAboveMediumScreens = useMediaQuery('(min-width:850px)');
  return (
    <div className="w-full min-h-screen min-w-[280px] p-5 flex justify-center items-center bg-[#ecf2f8]">
      <div className="max-w-2xl flex flex-col min-[850px]:flex-row">
        <div className="min-[850px]:max-w-[280px] min-[850px]:rounded-se-none min-[850px]:rounded-s-2xl rounded-se-2xl rounded-ss-2xl overflow-hidden">
          <img
            className="w-full h-full max-h-44 min-[850px]:max-h-full object-cover object-left"
            src={drawers}
            alt="drawers"
          />
        </div>
        <div className="bg-[#fff] relative px-4 min-[400px]:px-10 py-6 min-[850px]:rounded-es-none min-[850px]:rounded-e-2xl rounded-es-2xl rounded-ee-2xl">
          <div>
            <h3 className="text-base min-[850px]:text-xl font-bold">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h3>
            <p className="text-[13px] text-[#9eafc2] my-5">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div className="flex justify-between items-center relative">
            <div className="flex gap-5 items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={avatar}
                alt="avatar"
              />
              <div>
                <h4 className="font-semibold text-[13px]">Michelle Appleton</h4>
                <p className="text-[13px] text-[#9eafc2]">28 Jun 2020</p>
              </div>
            </div>
            <ShareButton
              setShowPopUp={setShowPopUp}
              isAboveMediumScreens={isAboveMediumScreens}
              showPopUp={showPopUp}
            />
          </div>
          {!isAboveMediumScreens && showPopUp && (
            <MobilePopUp
              setShowPopUp={setShowPopUp}
              isAboveMediumScreens={isAboveMediumScreens}
              showPopUp={showPopUp}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
