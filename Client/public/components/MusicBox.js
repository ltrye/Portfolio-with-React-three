import React, { useState } from 'react';
import { motion } from 'framer-motion';
import m1 from '../assets/m1.mp3';
import m2 from '../assets/m2.mp3';
import m3 from '../assets/m3.mp3';

import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi';

const music = [
  { name: 'trye1', description: 'tryetrye', src: m1 },
  { name: 'trye2', description: 'tryetrye', src: m2 },
  { name: 'trye3', description: 'tryetrye', src: m3 },
];
function MusicList({ openStatus, bgMusic, setMusic }) {
  const list = [];
  for (let i = 0; i < music.length; i += 1)
    list.push(
      <motion.svg
        onClick={() => {
          setMusic(i);
          console.log('Change');
        }}
        initial={{ y: 0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        animate={openStatus ? 'open' : 'close'}
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-9 w-9 cursor-pointer  focus:outline-none  "
        id="music"
      >
        <g color="blue" fontFamily="sans-serif" fontWeight="400">
          <motion.path
            fill={`${bgMusic === i ? 'yellow' : 'white'}`}
            // initial={{
            //   transform: 'rotate(0) translate(0 -1016.362)',
            //   translateY: -1016.362,

            //   originY: 'center',
            // }}
            // animate={{
            //   transform: `rotate(${bgMusic === i ? 360 : 0}) translate(0 -1016.362)'`,
            //   originY: 'center',
            // }} // Set the animation properties (360 degrees for a full spin)
            // transition={{ repeat: Infinity, duration: 2 }} // Repeat the animation infinitely every 2 seconds
            d="M16.44 1016.424a17.923 17.923 0 0 0-9.301 3.58c-7.455 5.645-9.344 16.072-4.346 23.975 4.998 7.902 15.227 10.66 23.521 6.343s11.902-14.278 8.297-22.906a.5.5 0 1 0-.922.385c3.409 8.156.003 17.553-7.837 21.635-7.841 4.08-17.49 1.478-22.215-5.993-4.726-7.47-2.942-17.304 4.105-22.64 7.047-5.337 16.995-4.387 22.904 2.187a.5.5 0 1 0 .745-.668 17.99 17.99 0 0 0-14.952-5.898z"
            transform={`rotate(${bgMusic === i ? 0 : 0}) translate(0 -1016.362)`}
          />
          <path
            d="M32.656 1024.283a.5.5 0 0 0-.418.78c.17.26.331.524.487.792a.5.5 0 1 0 .867-.5 17.96 17.96 0 0 0-.516-.84.5.5 0 0 0-.42-.232z"
            overflow="visible"
            transform="translate(0 -1016.362)"
          />
          <path
            fill={`${bgMusic === i ? 'yellow' : 'white'}`}
            d="M13.469 1026.353a.5.5 0 0 0-.51.5v4.506a.5.5 0 1 0 1 0v-3.644l12.508 7.148-12.508 7.147v-5.645a.5.5 0 1 0-1 0V1042.871a.5.5 0 0 0 .748.434l14.016-8.008a.5.5 0 0 0 0-.87l-14.016-8.007a.5.5 0 0 0-.238-.066z"
            overflow="visible"
            transform="translate(0 -1016.362)"
          />
          <path
            fill={`${bgMusic === i ? 'yellow' : 'white'}`}
            d="M13.459 1032.355a.5.5 0 0 0-.492.506v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.508-.506z"
            overflow="visible"
            transform="translate(0 -1016.362)"
          />
        </g>
      </motion.svg>
    );
  return <>{list.map((el) => el)}</>;
}
export default function MusicBox() {
  const [bgMusic, setMusic] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const handleMusicChange = (i) => {
    setMusic(i);
  };
  return (
    <div className=" relative z-30 float-right mr-3 mt-[9vh] h-[17rem] w-[3.5rem]  ">
      {isOpen && (
        <div className="absolute top-[-3rem] flex h-[2rem] w-full justify-center  ">
          {isMute ? (
            <HiVolumeOff
              onClick={() => setIsMute(!isMute)}
              color="white"
              className="absolute  ml-auto mr-auto h-[2rem] w-[2rem] cursor-pointer transition-all hover:scale-125  "
            />
          ) : (
            <HiVolumeUp
              onClick={() => setIsMute(!isMute)}
              color="white"
              className="absolute  ml-auto mr-auto h-[2rem] w-[2rem] cursor-pointer transition-all hover:scale-125  "
            />
          )}
        </div>
      )}
      <motion.div
        key="Max"
        initial={{ opacity: 0 }}
        variants={{
          open: { opacity: 0.7, clipPath: 'inset(2.5% 0% 0% 0% round 35px )' },
          close: {
            opacity: 0,
            clipPath: 'inset(2.5% 0% 100% 0% round 35px )',
          },
        }}
        animate={isOpen ? 'open' : 'close'}
        className={`absolute ${
          !isOpen && 'pointer-events-auto'
        } flex h-[100%] w-14 flex-col items-center justify-end gap-y-8 bg-[#000000]  pb-7 `}
        transition={{
          type: 'spring',
          stiffness: 1300,
          damping: 120,
        }}
      >
        {isOpen ? (
          <MusicList bgMusic={bgMusic} setMusic={handleMusicChange} openStatus={isOpen} />
        ) : (
          ''
        )}
      </motion.div>

      <motion.div
        key="Mini"
        onClick={() => {
          setOpen(!isOpen);
        }}
        className={`pointer-events-auto absolute float-left mr-6 h-14 w-14 cursor-pointer select-none rounded-full border-[3px] border-solid border-[#0000007f] transition-colors  bg-[${
          isOpen ? '#3c486b' : '#3c486b87'
        }] shadow-md`}
        whileTap={{ scale: 0.8 }}
        transition={{
          type: 'spring',
          duration: 10,
          stiffness: 800,
          damping: 80,
        }}
      >
        <svg
          className="h-15 w-15 m-auto inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          id="song"
        >
          <path
            fill="#F3E99F"
            d="M21.6,11.2l-4-3a1,1,0,0,0-1.05-.09A1,1,0,0,0,16,9v8.56A3.91,3.91,0,0,0,14,17a4,4,0,1,0,4,4V11l2.4,1.8a1,1,0,1,0,1.2-1.6Z"
          />
        </svg>
      </motion.div>
      <audio key={bgMusic} muted={isMute && true} preload="auto" playsinline autoPlay loop>
        <source src={`${music[bgMusic].src}`} type="audio/mpeg" />
      </audio>
    </div>
  );
}
