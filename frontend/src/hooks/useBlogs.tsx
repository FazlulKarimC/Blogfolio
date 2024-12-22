import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../appconfig";

interface Blog {
    id: string,
    title: string,
    content: string,
    authorId: string,
    author: {
        name: string
    }
}

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(BACKEND_URL+"/post/bulk", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            setBlogs(res.data);
            setLoading(false);
        })
    }, [])


    return {blogs, loading}
   
}