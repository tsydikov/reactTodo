import React from "react";

const PostForm = () => {
    return (
        <form>
            <MyInput
                onChange={e => setPost({ ...post, title: e.target.value })}
                value={post.title}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                onChange={e => setPost({ ...post, body: e.target.value })}
                value={post.body}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    )
}

export default PostForm;