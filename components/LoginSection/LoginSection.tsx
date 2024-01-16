import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlinePassword } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { MdAbc } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function LoginSection() {

    const [passwordshowhide, setpasswordshowhide] = useState(true)

    return (
        <>
            <div className="w-[500px] h-auto blue-bg rounded-lg p-10 px-20">
                <h1 className="text-3xl text-white text-center">Login</h1>
                <div className="w-full h-10 flex mt-8">
                    <div className="w-10 h-full bg-yellow-color text-blue-dark text-3xl flex justify-center items-center">
                        <BsFillPersonFill />
                    </div>
                    <div className="flex-1 h-full">
                        <input type="text" className="w-full h-full outline-yellow-main px-2" />
                    </div>
                </div>
                <div className="w-full h-10 flex mt-8">
                    <div className="w-10 h-full bg-yellow-color text-3xl flex justify-center items-center">
                        {passwordshowhide ? <MdOutlinePassword /> : <MdAbc />}
                    </div>
                    <div className="flex-1 h-full relative flex justify-center items-center">
                        <input type={passwordshowhide === true ? "password" : "text"} className="w-full h-full outline-yellow-main px-2" />
                        <div className="absolute right-2 text-xl cursor-pointer">
                            {passwordshowhide === true ? <FaRegEye onClick={() => { setpasswordshowhide(false) }} /> : <FaRegEyeSlash onClick={() => { setpasswordshowhide(true) }} />}
                        </div>
                    </div>
                </div>
                <div className="w-full h-10 mt-8 text-white">
                    <button className="w-full h-full bg-yellow-color font-bold">Log In</button>
                </div>
            </div>
        </>
    )
}
