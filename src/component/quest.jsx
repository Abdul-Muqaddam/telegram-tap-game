import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Quests = () => {
    const navigate=useNavigate();
    const location=useLocation()
    const [highLight,setHightLight]= useState(false)
    useEffect(()=>{
        setHightLight(true)
    },[location.pathname=="/quests"])
    const handleImprove=()=>{
        navigate("/improve")
    }
    const handleCity=()=>{
        navigate("/city")
    }
    const handleMinning=()=>{
        navigate("/hero")
    }
    const handleFriends=()=>{
        navigate("/friends")
    }
    const  handleQuest=()=>{
        navigate("/quests")
    }
    return (
        
        <>
            <div className="bg-custom-improve-picture bg-no-repeat bg-cover bg-center w-[100vw] h-[300vh]">
                <div className="w-[100vw] flex justify-center">

                    <div className="h-[10vh] w-[90vw] flex items-center justify-between ">
                        <div className="flex items-center justify-between w-[45vw] ">
                            <div className=" ">
                                <div className="relative">
                                    <img src="" alt="" className="h-[7vh]  z-[0] mt-10 rounded-t-[0.6rem]" />
                                    <div className="text-[white] font-bold text-[1.5rem] absolute bottom-[-10px] rounded-t-[2rem] left-[-2px]  ">Lv.1</div>
                                </div>
                                <div className="bg-[#424454] w-[18.116vw] h-[1rem] rounded-br-[0.6rem] rounded-bl-[0.6rem] ">
                                    <div className="w-[15.7vw] h-[1rem] text-[0.5rem]  rounded-bl-[0.6rem] bg-gradient-to-r from-[#FFCA54] to-[#fddb92] pl-2">79%</div>
                                </div>
                            </div>
                            <div className="mt-[1.3rem]">
                                <div className="text-[#d2d4d8]">
                                    Coin per Hour
                                </div>
                                <div className="flex items-center">
                                    <img src="/hero/coin-upgrade.png" alt="" className="h-[2.8vh] " />
                                    <div className="text-[white]  text-[1.2rem] font-bold">+3.7k</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[34vw] mt-8 h-[7rem]">
                            <div>

                                <div className="text-[#d2d4d8]">
                                    Coin
                                </div>
                                <div className="flex items-center">
                                    <img src="/hero/coin.png" alt="" className="h-[2.8vh] " />
                                    <div className="text-[white] text-[1.2rem] font-bold">{window.localStorage.getItem("score")/1000}k</div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <img src="/hero/hamburger.png" alt="" className="h-[4vh] mt-[2rem]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-bold text-[white] text-[2.6rem] flex justify-center mt-[2rem]">
                    Earn more coins
                </div>
                <div className="">
                    <div className="text-white ml-[1.2rem] mt-[1rem] text-[1.3rem]">Daily</div>
                    <div className="flex items-center flex-col w-[100vw] h-[100vh] ">
                        <div className="w-[90vw] h-[100vh] rounded-lg flex justify-evenly items-center flex-col ">
                            <div className="w-[80vw] flex flex-col ">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/bag.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div>
                                        <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Complete all daily quests</div>
                                        <div className="flex items-center ml-[0.7rem]">

                                            <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                            <div className="text-[white] text-shadow-black">+100,000 and Daily Lucky Box</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/youtube.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Watch youtube video</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-[1rem] text-shadow-black">+60,000 </div>
                                            </div>
                                        </div>
                                        <div className="text-[white] text-[1.8rem]">&gt;</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/youtube.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Watch youtube video</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+60,000 </div>
                                            </div>
                                        </div>
                                        <div className="text-[white] text-[1.8rem]">&gt;</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/tap.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Tap 4200 money</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+30,000 </div>
                                            </div>
                                        </div>
                                        <div className="text-[white] text-[1.8rem]">&gt;</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/skill.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Improve 5 different Skills</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+30,000 </div>
                                            </div>
                                        </div>
                                        <div className="text-[white] text-[1.8rem]">&gt;</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>

                        </div>
                    </div>
                    <div className="text-white ml-[1.2rem] mt-[1rem] text-[1.3rem] text-shadow-black">Quests To Do</div>
                    <div className="flex items-center flex-col w-[100vw] h-[100vh]">
                        <div className=" w-[90vw] h-[100vh] rounded-lg flex justify-evenly items-center flex-col ">
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/bag.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div>
                                        <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black text-shadow-black">Complete all daily quests</div>
                                        <div className="flex items-center ml-[0.7rem]">

                                            <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                            <div className="text-[white] text-shadow-black">+100,000 and Daily Lucky Box</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/youtube.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Watch youtube video</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+60,000 </div>
                                            </div>
                                        </div>
                                        <div className="text-[white] text-[1.8rem]">&gt;</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/youtube.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Watch youtube video</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+60,000 </div>
                                            </div>
                                        </div>
                                        <div className="text-[white] text-[1.8rem]">&gt;</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/tap.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Tap 4200 money</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/hero/coin.png" alt="" className="h-[4vh] text-shadow-black" />
                                                <div className="text-[white] ">+30,000 </div>
                                            </div>
                                        </div>
                                        <div className="text-[white] text-[1.8rem]">&gt;</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784] "></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/Quests/skill.jpeg" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.2rem] font-bold text-shadow-black">Improve 5 different Skills</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+30,000 </div>
                                            </div>
                                        </div>
                                        <div className="text-[white] text-[1.8rem]">&gt;</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>

                        </div>
                    </div>
                    <footer className="  border-[#5074d2] h-[9vh]  flex fixed bottom-4 w-[100vw] justify-around ">
                    

                    <button className="w-[18vw] h-[12vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown animation-delay-1000ms" onClick={handleImprove} >
                        <img src="/hero/fire.png" className="h-[4.5vh]" />
                        <div className="text-[#B2BECE] text-shadow-black">Improve</div>
                    </button>
                    <button className=" w-[18vw] h-[12vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown delay-400 animation-delay-600ms" onClick={handleCity}>
                        <img src="/hero/store.png" alt="" className="h-[4.5vh]" />
                        <div className="text-[#B2BECE] text-shadow-black">City</div>
                    </button>
                    
                        <button className={`w-[18vw] h-[12vh] flex items-center justify-center flex-col bg-gradient-to-b  from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown animation-150ms ${highLight?" transition-all duration-300 ease-in-out":""}` } onClick={handleMinning}>
                            <img src="/hero/mining.png" alt="" className={`h-[4.5vh] rounded-[3rem] px-1 absolute bottom-[2rem] ${highLight?" transition-all duration-300 ease-in-out":""} transition-all duration-300 ease-in-out`} />
                            <div className={`text-[#B2BECE]  mt-7  text-shadow-black`}>Mining</div>
                        </button>
                        <button  className={` w-[18vw] h-[12vh] flex items-center animate-upDown justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animation-delay-300ms`} onClick={handleFriends}>   
                            <img src="/hero/invite.png" alt="" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE] text-shadow-black">Friends</div>
                        </button>

                        <button className="w-[18vw] h-[12vh] flex items-center justify-center  flex-col  rounded-[3rem] " onClick={handleQuest}>
                            <img src="/hero/todo (2).png " alt="" className="h-[7.5vh] bg-[#55F9E9] animate-shadowFadeInOut rounded-[3rem]" />
                            <div className={`text-[#B2BECE] text-shadow-black ${highLight?"text-white":""}`}>Quests</div>
                        </button>   
            </footer>
                </div>
            </div>
        </>
    )
}
export default Quests