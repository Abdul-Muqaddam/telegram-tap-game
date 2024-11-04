import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "./context/context";
const Improve = () => {
    // const [score]=useContext(UserContext)
    const navigate = useNavigate();
    const [highLight, setHighLight] = useState(false)
    useEffect(() => {
        setHighLight(true)
    }, [navigate])
    const handleImprove = () => {
        navigate("/improve")
    }
    const handleCity = () => {
        navigate("/city")
    }
    const handleMinning = () => {
        navigate("/hero")
    }
    const handleFriends = () => {
        navigate("/friends")
    }
    const handleQuest = () => {
        navigate("/quests")
    }
    return (
        <>
            <div className="h-[200vh] w-[100vw] bg-custom-improve-picture bg-no-repeat bg-cover bg-center  ">
                <div className="w-[100vw] flex justify-center flex-col items-center">
                    <div className="h-[10vh] mb-[5vh] w-[90vw] flex items-center justify-between ">
                        <div className="flex items-center justify-between w-[45vw]">
                            <div className=" ">
                                <div className="relative">
                                    <img src="/src/assets/hero/logo.png" alt="" className="h-[7vh]  z-[0] mt-10 rounded-t-[0.6rem]" />
                                    <div className="text-[white] font-bold text-[1.7rem] absolute bottom-[-10px] rounded-t-[2rem] left-[-2px]  ">Lv.1</div>
                                </div>
                                <div className="bg-[#424454] w-[18.116vw] h-[1rem] rounded-br-[0.6rem] rounded-bl-[0.6rem]">
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
                                    <div className="text-[white] font-bold text-[1.2rem]">{window.localStorage.getItem("score")/1000}k</div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <img src="/src/assets/hero/hamburger.png" alt="" className="h-[4vh] mt-[2rem]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col w-[100vw] h-[70vh]">
                        <div className=" w-[90vw] h-[60vh] rounded-lg flex justify-evenly items-center flex-col ">
                            <div className="w-[80vw] flex flex-col">
                                <div className="text-white text-[1.7rem] font-bold mb-[1rem] text-shadow-black">
                                    Planet and Moons
                                </div>
                                <div className="flex ">

                                    <div>
                                        <img src="/src/assets/improve/planet & Moon/mars.webp " alt="" className="h-[7vh] rounded-2xl" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">

                                        <div>
                                            <div className="text-white ml-[1rem] text-[1.4rem] font-bold text-shadow-black text-shadow-black">Mars</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/src/assets/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black ">+200 coin/hour , +2 coin/tap</div>
                                            </div>
                                        </div>
                                        <img src="/src/assets/hero/coin.png" alt="" className="h-[5vh]" />
                                        <div className="text-[white] ">12,000 coins</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/src/assets/improve/planet & Moon/europa.webp" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.4rem] font-bold text-shadow-black">Europa</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/src/assets/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+250 coins/hour, +3 coins/tap </div>
                                            </div>
                                        </div>
                                        <img src="/src/assets/hero/coin.png" alt="" className="h-[5vh]" />
                                        <div className="text-[white] ">12,000 coins</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                <div>
                                        <img src="/src/assets/improve/planet & Moon/titan.webp" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.4rem] font-bold text-shadow-black">Titan</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/src/assets/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+150 coins/hour, +1 coins/tap </div>
                                            </div>
                                        </div>
                                        <img src="/src/assets/hero/coin.png" alt="" className="h-[5vh]" />
                                        <div className="text-[white] ">8,000 coins</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <divs className="flex">

                                <div>
                                        <img src="/src/assets/improve/planet & Moon/neptune.webp" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.4rem] font-bold text-shadow-black">Neptune</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/src/assets/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+200 coins/hour, +2 coins/tap </div>
                                            </div>
                                        </div>
                                        <img src="/src/assets/hero/coin.png" alt="" className="h-[5vh]" />
                                        <div className="text-[white] ">10,000 coins</div>
                                    </div>
                                </divs>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784] "></div>
                            </div>
                            

                        </div>
                    </div>
                    <div className="flex items-center flex-col w-[100vw] h-[70vh]">
                        <div className=" w-[90vw] h-[60vh] rounded-lg flex justify-evenly items-center flex-col ">
                            <div className="w-[80vw] flex flex-col">
                                <div className="text-white text-[1.7rem] font-bold mb-[1rem] text-shadow-black">
                                Spacecraft & Rovers
                                </div>
                                <div className="flex ">

                                    <div>
                                        <img src="/src/assets/improve/Spacecraft & Rovers/Voyager 1.webp " alt="" className="h-[7vh] rounded-2xl" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">

                                        <div>
                                            <div className="text-white ml-[1rem] text-[1.4rem] font-bold text-shadow-black text-shadow-black">Voyager 1</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/src/assets/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black ">+400 coin/hour , +3 coin/tap</div>
                                            </div>
                                        </div>
                                        <img src="/src/assets/hero/coin.png" alt="" className="h-[5vh]" />
                                        <div className="text-[white] ">15,000 coins</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                    <div>
                                        <img src="/src/assets/improve/Spacecraft & Rovers/Curiosity Rover.webp" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>
                                            <div className="text-white ml-[1rem] text-[1.4rem] font-bold text-shadow-black">Curiosity Rover</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/src/assets/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+350 coins/hour, +3 coins/tap </div>
                                            </div>
                                        </div>
                                        <img src="/src/assets/hero/coin.png" alt="" className="h-[5vh]" />
                                        <div className="text-[white] ">13,000 coins</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <div className="flex">

                                <div>
                                        <img src="/src/assets/improve/Spacecraft & Rovers/Apollo 11 .webp" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.4rem] font-bold text-shadow-black">Apollo 11</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/src/assets/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+380 coins/hour, +3 coins/tap </div>
                                            </div>
                                        </div>
                                        <img src="/src/assets/hero/coin.png" alt="" className="h-[5vh]" />
                                        <div className="text-[white] ">14,000 coins</div>
                                    </div>
                                </div>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784]"></div>
                            </div>
                            <div className="w-[80vw] flex flex-col">
                                <divs className="flex">

                                <div>
                                        <img src="/src/assets/improve/Spacecraft & Rovers/Hubble Telescope.webp" alt="" className="h-[7vh]" />
                                    </div>
                                    <div className="flex justify-between w-[65vw]">
                                        <div>

                                            <div className="text-white ml-[1rem] text-[1.4rem] font-bold text-shadow-black">Hubble Telescope</div>
                                            <div className="flex items-center ml-[0.7rem]">

                                                <img src="/src/assets/hero/coin.png" alt="" className="h-[4vh]" />
                                                <div className="text-[white] text-shadow-black">+450 coins/hour, +4 coins/tap </div>
                                            </div>
                                        </div>
                                        <img src="/src/assets/hero/coin.png" alt="" className="h-[5vh]" />
                                        <div className="text-[white] ">18,000 coins</div>
                                    </div>
                                </divs>
                                <div className="w-[80vw] h-[0.15vh] my-[0.5rem] bg-[#6f7784] "></div>
                            </div>
                            

                        </div>
                    </div>

                    
                    <footer className=" fixed bottom-0 h-[9vh] mt-[47rem] flex ">


                        <button className="w-[20vw] flex items-center justify-center flex-col rounded-[3rem] transition-all" onClick={handleImprove} >
                            <img src="/src/assets/hero/fire (2).png" className="h-[7.5vh] animate-shadowFadeInOut bg-[#55F9E9] rounded-[3rem]" />
                            <div className={`text-[#B2BECE] ${highLight ? "text-white" : ""}`}>Improve</div>
                        </button>
                        <button className=" w-[20vw] flex items-center justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown delay-400 animation-delay-600ms" onClick={handleCity}>
                            <img src="/src/assets/hero/store.png" alt="" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">City</div>
                        </button>

                        <button className={`w-[20vw] flex items-center justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown `} onClick={handleMinning}>
                            <img src="/src/assets/hero/mining.png" alt="" className={`h-[4.5vh]   rounded-[3rem] px-1 absolute bottom-[2rem]  transition-all duration-300 ease-in-out`} />
                            <div className={`text-[#B2BECE]  mt-10 ${highLight ? "text-[white]" : ""}`}>Mining</div>
                        </button>
                        <button className={` w-[20vw] flex items-center animate-upDown justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animation-delay-300ms`} onClick={handleFriends}>
                            <img src="/src/assets/hero/invite.png" alt="" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">Friends</div>
                        </button>
                        <button className="w-[20vw] flex items-center justify-center animate-upDown flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animation-delay-150ms " onClick={handleQuest}>
                            <img src="/src/assets/hero/todo.png" alt="" className="h-[4.5vh]" />
                            <div className="text-[#B2BECE]">Quests</div>
                        </button>
                    </footer>
                </div>

            </div>
        </>
    )
}
export default Improve