import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard";
import { Spinner } from "../components/Spinner";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
    const {blogs, loading} = useBlogs();

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div className="h-screen flex flex-col justify-center">
                    <Spinner/>
                </div>
            </div>
        </div>
    }
    
    return <div>
        <Appbar/>
        <div  className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                />)}
            </div>
        </div>
    </div>
}
