import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState, useEffect, Suspense, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { UserContext } from "./context/context";



const Model = () => {
    const modelRef=useRef()
    const { scene } = useGLTF("./texture of model and model/pluto.glb")
    useFrame(()=>{
        if(modelRef.current){
            modelRef.current.rotation.y=modelRef.current.rotation.y+0.005;
        }
    })
    return <primitive ref={modelRef} object={scene} position={[0, 0, 0]} scale={2.3}/>
}

const Hero = () => {
    // const { score, setScore } = useContext(UserContext);
    
    const [score, setScore] = useState(() => {
        let saveScore = window.localStorage.getItem("score")
        return saveScore ? parseInt(saveScore, 10) : 1
    })


    const [tapme, setTapme] = useState("Tap Me")
    const [enlarge, setEnlarge] = useState(false)
    const [highLight, setHightLight] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const value = setInterval(() => {
            setScore((prevalue) => (prevalue + 1))

        }, 1000);
        return () => clearInterval(value)
    }, [])

    useEffect(() => {
        if (location.pathname == "/hero") {
            setHightLight(true)
        }
    }, [location.pathname])
    useEffect(() => {
        window.localStorage.setItem("score", score)
    }, [score])

    const HandleTap = (event) => {

    }


    const handleTapMe = () => {
        setTapme("")
    }

    const handleIsEnlarge = () => {
        setEnlarge(true)
        setTimeout(() => {
            setEnlarge(false)
        }, 500)
    }
    const handleClickScore = () => {
        setScore((prevalue) => (prevalue + 9))
    }
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

            <div className="bg-custom-picture-hero  overflow-hidden h-[100vh] w-[100%]  bg-cover ">
                <div className="flex justify-center">
                    <div className="h-[10vh] w-[90vw] flex items-center justify-between ">
                        <div className="flex items-center justify-between w-[45vw]">
                            <div className=" ">
                                <div className="relative">
                                    <img src="" alt="" className="h-[7vh]  z-[0] mt-10 rounded-t-[0.6rem]" />
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
                                    <img src="/hero/coin-upgrade.png" alt="" className="h-[2.8vh] " />
                                    <div className="text-[white] font-bold text-[1.2rem]">+3.7k</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/hero/hamburger.png" alt="" className="h-[4vh] mt-[2rem]" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="/hero/coin.png" alt="" className="h-[7.9vh] absolute left-[5rem] top-[7rem] animate-upDown" />
                    <div className="text-white font-semibold text-[3rem] absolute left-[9rem] top-[6rem] Orbitron">{score}</div>

                </div>
                <div >
                    <div className={`h-[47vh] absolute z-10 top-[12rem] left-[3.5rem] transition-all duration-100 ease-in-out ${enlarge ? "scale-110 custom-drop-shadow" : ""}`} onClick={() => { handleTapMe(); handleIsEnlarge(); handleClickScore(); }}>
                        <Canvas>
                            <Suspense>
                                <ambientLight intensity={1.5} /> {/* Soft global lighting */}
                                <directionalLight position={[5, 5, 5]} intensity={1.5} /> {/* Sun-like light source */}
                                <pointLight position={[-5, -5, -5]} intensity={1.5} /> {/* Localized point light */}
                                <OrbitControls enableZoom={false}  enablePan={false}  />
                                <Model />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="text-white absolute left-[8rem] top-[30rem] font-bold text-[3rem] custome-text-shadow animate-upDown" onClick={handleTapMe} >{ }</div>
                </div>
                <footer className="  border-[#5074d2] h-[9vh] mt-[26.5rem] flex justify-around">


                    <button className="w-[18vw] h-[12vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown animation-delay-1000ms transition-all" onClick={handleImprove} >
                        <img src="/hero/fire.png" className="h-[4.5vh]" />
                        <div className="text-[#B2BECE]">Improve</div>
                    </button>
                    <button className=" w-[18vw] h-[12vh] flex items-center justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animate-upDown delay-400 animation-delay-600ms" onClick={handleCity}>
                        <img src="/hero/store.png" alt="" className="h-[4.5vh]" />
                        <div className="text-[#B2BECE]">City</div>
                    </button>

                    <button className={`w-[18vw] h-[12vh] flex items-center justify-center flex-col  rounded-[3rem] ${highLight ? " transition-all duration-300 ease-in-out" : ""}`} onClick={handleMinning}>
                        <div className={`h-[10.5vh] w-[15vw] left-[10.2rem] border-4 border-[#305084] bg-[#2F447A] rounded-[3rem] px-1 absolute bottom-[2.3rem]  ${highLight ? "border-[#55F9E9] bg-[#55F9E9] animate-shadowFadeInOut transition-all duration-300 ease-in-out" : ""} transition-all duration-300 ease-in-out`} ></div>
                        <div className={`text-[#B2BECE]  mt-10 ${highLight ? "text-[white]" : ""}`}>Mining</div>
                    </button>
                    <button className={` w-[18vw] h-[12vh] flex items-center animate-upDown justify-center flex-col bg-gradient-to-b from-[#1E1E1E] to-[#444343] rounded-[3rem] animation-delay-300ms`} onClick={handleFriends}>
                        <img src="/hero/invite.png" alt="" className="h-[4.5vh]" />
                        <div className="text-[#B2BECE]">Friends</div>
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
export default Hero