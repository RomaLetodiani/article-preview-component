import React from 'react';
import drawers from './images/drawers.jpg';
import avatar from './images/avatar-michelle.jpg';
import {
  FaShare,
  FaFacebookSquare,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';

const App = () => {
  return (
    <div className="w-full min-h-screen min-w-[280px] p-5 flex justify-center items-center bg-[#ecf2f8]">
      <div className="max-w-2xl flex flex-col sm:flex-row">
        <div className="sm:max-w-[280px] sm:rounded-se-none sm:rounded-s-2xl rounded-se-2xl rounded-ss-2xl overflow-hidden">
          <img
            className="w-full h-full max-h-44 sm:max-h-full object-cover object-left"
            src={drawers}
            alt="drawers"
          />
        </div>
        <div className="bg-[#fff] px-10 py-6 sm:rounded-es-none sm:rounded-e-2xl rounded-es-2xl rounded-ee-2xl">
          <div>
            <h3 className="text-base sm:text-xl font-bold">
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
            <button className="rounded-full text-[13px] p-2 bg-[#ecf2f8]">
              <FaShare />
            </button>
            <div className="absolute top-0 -right-12 z-10">
              <FaFacebookSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
