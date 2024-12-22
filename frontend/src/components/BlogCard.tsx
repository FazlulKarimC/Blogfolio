import { Link } from "react-router-dom";
interface BlogCardProps {
    id: string;
    title: string;
    content: string;
    authorName: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer bg-slate-50 mb-4">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>
}


export function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-800 rounded-full w-6 h-6">
    <span className="text-xs font-extralight text-white ">
        {name[0].toUpperCase()}
    </span>
</div>
}