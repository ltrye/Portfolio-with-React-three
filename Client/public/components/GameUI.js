import React, { useState, useContext, useRef, useEffect } from 'react';
import TreeContext from '../src/TreeContext';
import tr1 from '../assets/tr1.png';
import tr2 from '../assets/tr2.png';
import tr3 from '../assets/tr3.png';
import tr4 from '../assets/tr4.png';

const treeList = [tr1, tr2, tr3, tr4];

export default function GameUI() {
  const [fadeOut, setFadeOut] = useState(true);
  const [tutorial, setTutorial] = useState(true);
  const UI = useRef();
  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!UI.current.contains(e.target)) setFadeOut(true);
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
  const { selectedTree, setSelectedTree } = useContext(TreeContext);
  return (
    <>
      {!tutorial && (
        <button
          type="button"
          className="absolute bottom-2 right-2 rounded-xl bg-[#020202a4] pb-2 pl-4 pr-4 pt-2 text-white"
          onClick={() => setTutorial(true)}
        >
          Tutorial
        </button>
      )}
      <section
        onTransitionEnd={(e) => {
          if (!tutorial) e.currentTarget.classList.add('hidden');
        }}
        className={`absolute bottom-[10%] md:bottom-6 ${
          tutorial ? 'opacity-100' : 'opacity-0'
        } right-6 h-[inherited] w-[90%] rounded-xl bg-[#000000ab] p-5 text-white transition-all md:h-[10rem] md:w-[25rem]`}
      >
        - Move the character: w, a, s, d. Shift to sprint.
        <br />
        - Press f to place a prop.
        <br />- Simply click on a prop to remove it.
        <button
          type="button"
          onClick={() => setTutorial(false)}
          className="text-bl relative  mt-4 block rounded-xl bg-[#55698f] pb-2 pl-8 pr-8 pt-2 transition-colors hover:bg-[#7598d8]"
        >
          Ok
        </button>
      </section>

      <section
        ref={UI}
        className={`absolute bottom-0 font-sans font-medium transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          fadeOut ? 'translate-y-[calc(17rem-38px)] ' : 'translate-y-[0]'
        } left-[12%] right-[12%] flex  h-[17rem] flex-col items-center justify-center`}
      >
        <button
          type="button"
          onClick={() => setFadeOut(!fadeOut)}
          className="relative  cursor-pointer whitespace-nowrap rounded-t-2xl border border-[#00000098] bg-[#2245459d]  pb-2 pl-8 pr-8 pt-2 text-center text-white text-opacity-80 transition-colors duration-300  hover:text-opacity-100 focus:outline-none "
        >
          Select props
        </button>
        <div className="relative flex h-full w-full overflow-auto rounded-t-2xl border-[5px] border-solid border-black bg-[#000000d3] pl-2 pr-2 pt-6 md:flex-row  md:justify-evenly md:pl-8 md:pr-8">
          <div className="flex h-[400%] w-full flex-col items-center justify-center gap-8 pb-6 md:h-full  md:flex-row md:pb-2">
            {treeList.map((el, index) => (
              <button
                type="button"
                onClick={() => setSelectedTree(index)}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`relative flex h-[10rem] cursor-pointer flex-col flex-nowrap items-center justify-center  overflow-hidden rounded-xl  border-solid border-[#57C5B6] transition-all duration-100  focus:outline-none md:h-[12vw]  md:basis-[20vw] ${
                  selectedTree === index ? 'border-[5px]' : 'border-0'
                } `}
              >
                <img
                  className="h-5/6 h-full w-full select-none  "
                  src={`${treeList[index]}`}
                  alt="Choose tree type"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
