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
            <div className="h-[100vh] w-[100vw] bg-[#233456] overflow-y-hidden">
                <div className="w-[100vw] flex justify-center">

                    <div className="h-[10vh] w-[90vw] flex items-center justify-between ">
                        <div className="flex items-center justify-between w-[45vw]">
                            <div className=" ">
                                <div className="relative">
                                    <img src="/src/assets/hero/logo.png" alt="" className="h-[7vh]  z-[0] mt-10 rounded-t-[0.6rem]" />
                                    <div className="text-[white] font-bold text-[1.7rem] absolute bottom-[-10px] rounded-t-[2rem] left-[-2px]  ">Lv.1</div>
                                </div>
                                <div className="bg-[#424454] w-[18.116vw] h-[1rem] rounded-br-[0.6rem] ">
                                    <div className="w-[15.7vw] h-[1rem] text-[0.7rem]  rounded-bl-[0.6rem] bg-gradient-to-r from-[#FFCA54] to-[#fddb92] pl-2">79%</div>
                                </div>
                            </div>
                            <div className="mt-[1.3rem]">
                                <div className="text-[#d2d4d8]">
                                    Coin per Hour
                                </div>
                                <div className="flex items-center">
                                    <img src="/src/assets/hero/coin-upgrade.png" alt="" className="h-[2.8vh] " />
                                    <div className="text-[white] font-bold text-[1.2rem]">+3.7k</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[34vw] mt-8 h-[7rem]">
                            <div>

                                <div className="text-[#d2d4d8]">
                                    Coin
                                </div>
                                <div className="flex items-center">
                                    <img src="/src/assets/hero/coin.png" alt="" className="h-[2.8vh] " />
                                    <div className="text-[white] font-bold text-[1.2rem]">+3.7k</div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <img src="/src/assets/hero/hamburger.png" alt="" className="h-[4vh] mt-[2rem]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <h1 className="text-white text-[2.8rem] font-bold absolute top-10 left-[4.1rem]">Invite Friends!</h1>
                    <p className="  absolute top-32 left-7 text-[1.35rem] text-[#b6c3d8]">You and your friend will receive bonuses </p>
                </div>
                <div>
                    <div className="flex absolute">
                        <div className="relative bg-[#162339] h-[15vh] w-[20vh] left-[1rem] top-52 flex items-center rounded-lg ">
                            <img src="/src/assets/hero/coin.png" alt="" className=" h-[4vh] absolute left-4 top-[2.5rem]" />
                            <div className=" bg-gradient-to-b from-[#E7C46D] to-[#f8edcf] bg-clip-text text-transparent font-bold text-[2rem] top-[2.1rem] left-12 absolute ">+5,000</div>
                        <div className="text-white absolute top-[5rem] left-[0.4rem]">
                            For you and your Friend
                        </div>
                        </div>
                        <div className="relative  bg-[#162339] h-[15vh] w-[23vh] left-[1.5rem] top-52 flex items-center rounded-lg ">
                            <img src="/src/assets/referal/star.png" alt=""  className="relative bottom-[5rem] left-[3.5rem] h-[5rem] "/>
                            <img src="/src/assets/hero/coin.png" alt="" className=" h-[4vh] absolute left-4 top-[1.5rem]" />
                            <div className=" bg-gradient-to-b from-[#E7C46D] to-[#f8edcf] bg-clip-text text-transparent font-bold text-[2rem] top-[1.1rem] left-12 absolute ">+25,000</div>
                        <div className="text-white absolute top-[4rem] left-[1rem] ">
                            For you and your Friend if he has Telegram Premium
                        </div>
                        </div>
                        <div className="w-[90vw] h-[25vh] bg-[#142135] absolute left-[1.5rem] top-[23rem] rounded-lg">
                            <div className="flex">
                            <img src="/src/assets/hero/coin.png" alt="" className="h-[8.5vh] relative top-3 left-1" />
                            <div className="bg-gradient-to-b from-[#E7C46D] to-[#ffecb6] text-[4rem] bg-clip-text text-transparent font-bold absolute left-20">+41T</div>
                            </div>
                            <div className="text-[white] text-[1.3rem] ml-[1rem] mt-3">when your friend levels up</div>
                            <button className="text-white bg-gradient-to-b from-[#F29623] to-[#FAC445] w-[36vw] h-[6.5vh] rounded-[2rem] ml-[1.2rem] text-[1.3rem] mt-[1.5rem]">&gt; Learn more </button>
                            <img src="/src/assets/referal/tiny_elon_musk.png" alt="" className="absolute h-[13vh] right-[8.3rem] -bottom-3" />
                            <img src="/src/assets/referal/rock_jeff.png" alt="" className="absolute h-[20vh] -bottom-4 right-16" />
                            <img src="/src/assets/referal/elon_musk_full.png" alt="" className="h-[30vh] absolute -bottom-5 -right-[2.7rem] " />
                        </div>
                        <button className="absolute text-white bg-[#07C160] top-[40rem] left-5 w-[70vw] h-[6vh] rounded-[3rem] text-[1.3rem]">Invite friends</button>
                        <button className="absolute top-[40rem] right-1 bg-[#07C160] rounded-[3rem]"><img src="/src/assets/referal/link.png" alt="" className="h-[6vh]" /></button>
                    </div>
                </div>
                <footer className=" absolute bg-gradient-to-b from-[#2C3B62] to-[#354672] border-t-2 border-[#5074d2] h-[9vh] mt-[47.6rem] flex ">
                    

                        <button className="w-[20vw] flex items-center justify-center flex-col" onClick={handleImprove} >
                            <img src="/src/assets/hero/fire.png" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">Improve</div>
                        </button>
                        <button className=" w-[20vw] flex items-center justify-center flex-col" onClick={handleCity}>
                            <img src="/src/assets/hero/store.png" alt="" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">City</div>
                        </button>
                        
                            <button className={`w-[20vw] flex items-center justify-center flex-col ` } onClick={handleMinning}>
                                <img src="/src/assets/hero/elon_musk_half_body.png" alt="" className={`h-[7.5vh] left-[11.2rem] border-4 border-[#305084] bg-[#2F447A] rounded-[3rem] px-1 absolute bottom-[2rem]  `} />
                                <div className={`text-[#B2BECE] mt-10`}>Mining</div>
                            </button>
                            <button  className={` w-[20vw] flex items-center justify-center flex-col ${highLight?"bg-gradient-to-b from-[#f5b026a9] to-[#f5b02600]":""}`} onClick={handleFriends}>   
                                <img src="/src/assets/hero/invite.png" alt="" className="h-[4.5vh]" />
                                <div className="text-[#B2BECE]">Friends</div>
                            </button>

                            <button className="w-[20vw] flex items-center justify-center flex-col" onClick={handleQuest}>
                                <img src="/src/assets/hero/todo.png" alt="" className="h-[4.5vh]" />
                                <div className="text-[#B2BECE]">Quests</div>
                            </button>   
                </footer>
            </div>
        </>
    )
}
export default Friends