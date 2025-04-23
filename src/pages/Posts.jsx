import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Posts = () => {
    const [data, setData] = useState([])



    function arrayData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                alert(err)
            })
    }

    useEffect((arrayData), [])

    return (
        <>
            <h1>Card Posts</h1>
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

export default Posts