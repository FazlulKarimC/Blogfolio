import { Avatar } from "./Avatar"
import { Link } from "react-router-dom"


export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4 bg-slate-200">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                <b>Blogfolio</b>
        </Link>
        <div className="flex items-center">
            <Link to={`/publish`} className="px-4">
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Write</button>
            </Link>
            <div className="pb-2"><Avatar/></div>
        </div>
    </div>
}
