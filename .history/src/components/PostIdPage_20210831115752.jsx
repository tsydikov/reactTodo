import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/Loader/Loader";
import { Link } from 'react-router-dom';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getDyId(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div className="postPage_container">

            <h3>Вы открыли страницу поста  с ID  {params.id}</h3>
            {isLoading
                ? <Loader />
                : <div>
                    <h1>{post.id}. {post.title}</h1>
                    <div>{post.body}</div>
                </div>
            }
            <h3 style={{ marginTop: 15 }}>
                Комментарии
            </h3>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{ marginTop: 15 }}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
            <br />
            <Link to="/posts" style={{ fontSize: 24 }}>Назад</Link>
        </div>
    )
}

export default PostIdPage;