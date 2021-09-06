import React from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. Jsvascript</strong>
                <div>
                    Jsvascript - programming leng
                </div>
            </div>
            <div className="post__btn">
                <button outlined >delete</button>
            </div>
      </div>
    )
}

export default PostItem;