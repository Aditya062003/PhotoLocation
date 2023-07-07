import React, { useRef } from "react";
import Xarrow from "react-xarrows";

const Homepage = () => {
  const box1Ref = useRef(null);
  return (
    <div className="min-h-screen bg-[#161616]">
      <div className="md:flex md:gap-16 block py-4 px-8">
        <div className="md:w-1/2 min-h-screen w-full mt-4">
          <div className="text-[#28A9E2] text-[2rem] bg-[#28A9E2] bg-opacity-20 w-fit px-1 py-1]">
            Openlake
          </div>
          <div className="text-[#FFFFFF] my-2 text-[2.5rem] font-bold leading-[3.25rem] ">
            Embrace the power of collaboration with Open Lake
          </div>
          <div className="text-[1.25rem] my-2 text-[#FFFFFF] opacity-50">
            Fostering Innovation Through Collective Expertise
          </div>
          <div className="bg-[#1F2526] mt-4 w-fit">
            <div className="text-[#ABAEB4] border-b border-[#3C4045] py-1 text-[0.75rem] p-4">
              Hi, we are Open Lake!
            </div>
            <div className="py-4 pl-4 pr-40">
              <span className="text-[#6E7681] py-4 text-[1rem]">1</span>
              <span className="text-[#A5D6FF] py-4 text-[1rem]">
                "Embrace the open source revolution"
              </span>
            </div>
          </div>
        </div>
        <div className="relative mr-6 px-4 sm:px-8 md:px-0 w-full md:w-1/2 mt-4">
          <div
            ref={box1Ref}
            className="absolute  mr-4  ml-4 md:ml-6 mt-24 bg-opacity-99 bg-[#1D4B60] rounded-4xl top-0 z-10 w-full md:w-auto"
          >
            <div className="flex mt-4 mx-4 md:mx-6 gap-4">
              <div className="bg-[#f46b5d] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#f9bd4e] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#57c353] px-2 py-2 rounded-xl"></div>
            </div>
            <div className="border-b border-[#ffffff50] mt-3"></div>
            <div className="absolute mt-[-6rem] ml-[-3rem]  mb-10 z-[-5] bg-[#1D4B60] bg-opacity-60 rounded-4xl top-0 w-full h-full">
              <div className="text-[#28A9E2] pr-3 text-[1rem] py-3 text-right border-b border-[#ffffff50]">
                Openlake
              </div>
              <div className="text-white text-[1rem] font-[400] mt-4 ml-4">
                #For a better World!
              </div>
            </div>
            <div className="pl-6 md:pl-14 pr-4 md:pr-32 py-6 md:py-12">
              <span className="text-whitetext-wrapper text-white">
                console.log(
              </span>
              <span className="span text-cyan-300">
                'Building a better world'
              </span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-[#C398FF]">import</span>
              <span className="text-white text-wrapper">
                {" "}
                {"{"} world {"}"}{" "}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">from</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="span text-cyan-300">'OpenLake'</span>
              <br />
              <span className="text-wrapper text-white">
                function openLake() {"{"}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">return</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="span text-cyan-300">'Better World'</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">const happiness =</span>{" "}
              <span className="text-wrapper-2 text-[#C398FF]">await</span>
              <span className="text-wrapper text-white"> git.pull(</span>
              <span className="span text-cyan-300">'openlake'</span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-white">if</span>
              <span className="text-wrapper text-white"> (openLake) {"{"}</span>
              <span className="span text-white">happiness++;</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">commit(</span>
              <span className="span text-cyan-300">'BetterWorld'</span>
              <span className="text-white">)</span>
              <br />
              <span className="text-white">devClub() // OpenLake</span>
              <br />
              <span className="text-white">openLake = () =&gt;</span>{" "}
              <span className="span text-cyan-300">'forBetterWorld'</span>
              <br />
              <span className="text-wrapper text-white">#Code </span>
              <span className="text-wrapper-2 text-[#C398FF]">with</span>
              <span className="text-wrapper text-white"> Purpose</span>
              <br />
              <span className="text-wrapper text-white">#Code </span>
              <span className="text-wrapper-2 text-[#C398FF]"> for</span>
              <span className="text-wrapper text-white"> a Cause</span>
            </div>
          </div>
        </div>
      </div>

      <div id="elem2" className="min-h-screen bg-[#161616]">
        <div className="relative mr-6 px-4 sm:px-8 md:px-0 w-full md:w-1/2 mt-4">
          <div className="absolute  mr-4  ml-4 md:ml-6 mt-24 bg-opacity-99 bg-[#1D4B60] rounded-4xl top-0 z-10 w-full md:w-auto">
            <div className="flex mt-4 mx-4 md:mx-6 gap-4">
              <div className="bg-[#f46b5d] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#f9bd4e] px-2 py-2 rounded-xl"></div>
              <div className="bg-[#57c353] px-2 py-2 rounded-xl"></div>
            </div>
            <div className="border-b border-[#ffffff50] mt-3"></div>
            <div className="absolute mt-[-6rem] ml-[-3rem]  mb-10 z-[-5] bg-[#1D4B60] bg-opacity-60 rounded-4xl top-0 w-full h-full">
              <div className="text-[#28A9E2] pr-3 text-[1rem] py-3 text-right border-b border-[#ffffff50]">
                Openlake
              </div>
              <div className="text-white text-[1rem] font-[400] mt-4 ml-4">
                #For a better World!
              </div>
            </div>
            <div className="pl-6 md:pl-14 pr-4 md:pr-32 py-6 md:py-12">
              <span className="text-whitetext-wrapper text-white">
                console.log(
              </span>
              <span className="span text-cyan-300">
                'Building a better world'
              </span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-[#C398FF]">import</span>
              <span className="text-white text-wrapper">
                {" "}
                {"{"} world {"}"}{" "}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">from</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="span text-cyan-300">'OpenLake'</span>
              <br />
              <span className="text-wrapper text-white">
                function openLake() {"{"}
              </span>
              <span className="text-wrapper-2 text-[#C398FF]">return</span>
              <span className="text-wrapper text-white">&nbsp;</span>
              <span className="span text-cyan-300">'Better World'</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">const happiness =</span>{" "}
              <span className="text-wrapper-2 text-[#C398FF]">await</span>
              <span className="text-wrapper text-white"> git.pull(</span>
              <span className="span text-cyan-300">'openlake'</span>
              <span className="text-wrapper text-white">)</span>
              <br />
              <span className="text-wrapper-2 text-white">if</span>
              <span className="text-wrapper text-white"> (openLake) {"{"}</span>
              <span className="span text-white">happiness++;</span>
              <span className="text-wrapper text-white"> {"}"}</span>
              <br />
              <span className="text-white">commit(</span>
              <span className="span text-cyan-300">'BetterWorld'</span>
              <span className="text-white">)</span>
              <br />
              <span className="text-white">devClub() // OpenLake</span>
              <br />
              <span className="text-white">openLake = () =&gt;</span>{" "}
              <span className="span text-cyan-300">'forBetterWorld'</span>
              <br />
              <span className="text-wrapper text-white">#Code </span>
              <span className="text-wrapper-2 text-[#C398FF]">with</span>
              <span className="text-wrapper text-white"> Purpose</span>
              <br />
              <span className="text-wrapper text-white">#Code </span>
              <span className="text-wrapper-2 text-[#C398FF]"> for</span>
              <span className="text-wrapper text-white"> a Cause</span>
            </div>
          </div>
        </div>
      </div>

      <Xarrow
        start={box1Ref} //can be react ref
        end="elem2" //or an id
      />
    </div>
  );
};

export default Homepage;
