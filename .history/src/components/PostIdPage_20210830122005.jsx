import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getDyId(id)
        setPost(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
    },[])
    return (
        <div>
            <h1>Вы открыли страницу поста  с ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                comments
            </h1>
        </div>
    )
}

export default PostIdPage;