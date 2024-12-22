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

export const useBlog = ({id}: {id: string}) => {
    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(BACKEND_URL+"/post/"+id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            setBlog(res.data);
            setLoading(false);
        })
    }, [])


    return {blog, loading}
   
}