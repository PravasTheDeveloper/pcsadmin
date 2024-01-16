import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";

export default function MainDashBoard() {

    const [ShowSkillAddFeild, setShowSkillAddFeild] = useState(false)

    return (
        <>
            <div className="flex-1 min-h-screen p-10">
                <div className="w-full h-full bg-red-700 relative">

                    {/* Add Skill Penel Button */}
                    <div className="w-14 h-14 bg-yellow-main rounded-full absolute bottom-0 right-0 text-4xl flex justify-center items-center text-white cursor-pointer" onClick={()=>setShowSkillAddFeild(true)}>
                        <FiPlus />
                    </div>

                </div>
                {/* ADD SKILLS Penel */}
                <div className={`w-full h-screen absolute top-0 left-0 bg-black-kom  justify-center items-center ${ShowSkillAddFeild === false ? "hidden" : "flex"}`}>
                    <div className="w-[500px] h-auto blue-bg rounded-lg p-10 px-20 relative">
                        <h1 className="text-3xl text-white text-center">Add Skills</h1>
                        <div className="w-full h-10 flex mt-8">
                            <div className="flex-1 h-full">
                                <input type="text" className="w-full h-full outline-yellow-main px-2" placeholder="Name Of Skills" />
                            </div>
                        </div>
                        <div className="w-full h-10 flex mt-8">
                            <div className="flex-1 h-full relative flex justify-center items-center">
                                <input type="text" className="w-full h-full outline-yellow-main px-2" placeholder="Image Link" />
                            </div>
                        </div>
                        <div className="w-full h-10 mt-8 text-white">
                            <button className="w-full h-full bg-yellow-color font-bold">Add Skills</button>
                        </div>
                        <div className="bg-rose-400 w-6 h-6 text-white text-xl rounded-full flex justify-center items-center top-[-7px] absolute right-[-7px] cursor-pointer" onClick={() => { setShowSkillAddFeild(false) }}>
                            <RxCross2 />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
