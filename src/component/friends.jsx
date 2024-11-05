import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Friends = () => {
    const navigate=useNavigate()
    const [highLight,setHightLight]= useState(false)
    useEffect(()=>{
        if(location.pathname=="/friends"){
            setHightLight(true)
        }
    },[location.pathname]) 
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
            <div className="h-[160vh] w-[100vw] bg-custom-invite-picture bg-cover bg-center overflow-y-hidden">
                <div className="w-[100vw] flex justify-center">

                    <div className="h-[10vh] w-[90vw] flex items-center justify-between ">
                        <div className="flex items-center justify-between w-[45vw]">
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
                                    <img src="/hero/coin-upgrade.png" alt="" className="h-[6vh] " />
                                    <div className="text-[white] font-bold text-[1rem]">+3.7k</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[34vw] mt-8 h-[7rem]">
                            <div>

                                <div className="text-[#d2d4d8]">
                                    Coin
                                </div>
                                <div className="flex items-center">
                                    <img src="/hero/coin.png" alt="" className="h-[6vh] " />
                                    <div className="text-[white] font-bold text-[1rem]">{window.localStorage.getItem("score")/1000}k</div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <img src="/hero/hamburger.png" alt="" className="h-[4vh] mt-[2rem]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <h1 className="text-white text-[2.6rem] font-bold absolute top-10 left-[4.1rem]">Invite Friends!</h1>
                    <p className="  absolute top-32 left-7 text-[1.15rem] text-[white]  text-shadow-black">You and your friend will receive bonuses </p>
                </div>
                <div>
                    <div className="flex absolute">
                        <div className="relative bg-[#162339] h-[25vh] w-[30vh] left-[1rem] top-52 flex items-center rounded-lg ">
                            <img src="/hero/coin.png" alt="" className=" h-[7vh] absolute left-3 top-[2.2rem]" />
                            <div className=" bg-gradient-to-b from-[#E7C46D] to-[#f8edcf] bg-clip-text text-transparent font-bold text-[1.8rem] top-[2.1rem] left-12 absolute ">+5,000</div>
                        <div className="text-white absolute top-[5rem] left-[1.5rem]">
                            For you and your Friend
                        </div>
                        </div>
                        <div className="relative  bg-[#162339] h-[25vh] w-[32vh] left-[1.5rem] top-52 flex items-center rounded-lg ">
                            <img src="/referal/star.png" alt=""  className="relative bottom-[5rem] left-[2.7rem] h-[5rem] "/>
                            <img src="/hero/coin.png" alt="" className=" h-[7vh] absolute left-3 top-[1.3rem]" />
                            <div className=" bg-gradient-to-b from-[#E7C46D] to-[#f8edcf] bg-clip-text text-transparent font-bold text-[1.8rem] top-[1.1rem] left-12 absolute ">+25,000</div>
                        <div className="text-white absolute top-[4rem] left-[1rem] ">
                            For you and your Friend if he has Telegram Premium
                        </div>
                        </div>
                        <div className="w-[90vw] h-[25vh] bg-transparent absolute left-[4rem] top-[28rem] rounded-lg">
                            <div className="flex">
                            <img src="/hero/coin.png" alt="" className="h-[8.5vh] relative top-3 left-1" />
                            <div className="bg-gradient-to-b from-[#E7C46D] to-[#ffecb6] text-[3rem] bg-clip-text text-transparent font-bold absolute left-20">+41T</div>
                            </div>
                            <div className="text-[white] font-bold text-shadow-black text-[1.1rem] ml-[1rem] mt-3">when your friend levels up</div>
                            <button className="text-white bg-gradient-to-b from-[#F29623] to-[#FAC445] w-[36vw] h-[6.5vh] rounded-[2rem] ml-[1.2rem] text-[1.1rem] mt-[1.5rem]">&gt; Learn more </button>
                            <img src="/referal/planet (3).png" alt="" className="absolute top-[5rem] left-[10rem] h-[19vh]" />
                        </div>
                        <button className="absolute text-white bg-[#162339] animate-shadowFadeInOutBlue top-[40rem] left-6 w-[70vw] h-[10vh] rounded-[3rem] text-[1.1rem]">Invite friends</button>
                        <button className="absolute top-[40rem] right-0 bg-[#162339] animate-shadowFadeInOutBlue animation-delay-1000ms rounded-[3rem]"><img src="/referal/link.png" alt="" className="h-[10vh] " /></button>
                    </div>
                </div>
                <footer className="  border-[#5074d2] h-[9vh] mt-[47rem] flex w-[100vw] justify-around ">
                    

                        <button className="w-[18vw] h-[12vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown animation-delay-1000ms" onClick={handleImprove} >
                            <img src="/hero/fire.png" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">Improve</div>
                        </button>
                        <button className=" w-[18vw] h-[12vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown delay-400 animation-delay-600ms" onClick={handleCity}>
                            <img src="/hero/store.png" alt="" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">City</div>
                        </button>
                        
                            <button  className={` w-[18vw] h-[12vh] flex items-center animate-upDown justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animation-delay-300ms`} onClick={handleMinning}>   
                                <img src="/hero/mining.png" alt="" className={`h-[4.5vh] `} />
                                <div className="text-[#B2BECE]">Minning</div>
                            </button>
                            <button className={`w-[17vw] flex items-center justify-center flex-col rounded-[3rem] ${highLight?" transition-all duration-300 ease-in-out":""}` } onClick={handleFriends}>
                                <img src="/hero/invite (2).png" alt="" className={`h-[7.5vh]  rounded-[3rem] px-1 absolute shadow-green-menu ${highLight?"bg-[#55F9E9] animate-shadowFadeInOut transition-all duration-300 ease-in-out":""} transition-all duration-300 ease-in-out`} />
                                <div className={`text-[#B2BECE]  mt-16 ${highLight?"text-[white]":""}`}>Friends</div>
                            </button>

                            <button className="w-[18vw] h-[12vh] flex items-center justify-center animate-upDown flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animation-delay-150ms " onClick={handleQuest}>
                                <img src="/hero/todo.png" alt="" className="h-[4.5vh]" />
                                <div className="text-[#B2BECE]">Quests</div>
                            </button>   
                </footer>
            </div>
        </>
    )
}
export default Friends 