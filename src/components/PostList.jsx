import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { useList } from "../context/PostsListContext";




const PostsList = () => {
    const { data } = useList()

    return (
        <>

            <div className="post-list">

                {data.map(({ id, title, body }) => (
                    <div key={id} className="post-card">
                        <h2>{title}</h2>
                        <Link to={`/posts/${id}`}><p className="info-link">Per più informazioni</p></Link>
                    </div>

                ))}
            </div>
        </>
    )


}

export default PostsList 