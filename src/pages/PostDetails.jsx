import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


function PostDetails() {

    const navigate = useNavigate()
    const [prevId, setPrevId] = useState(0)
    const [postId, setPostId] = useState(0)


    const [card, setCard] = useState([])

    const { id } = useParams()

    function getCard() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setCard(res.data)
                setPrevId(parseInt(id) - 1)
                setPostId(parseInt(id) + 1)
            })
            .catch(err => console.error(err))
    }
    useEffect(getCard, [id])

    return (
        <>
            <div className="custom-card">
                <h1 className="card-title">{card.title}</h1>
                <p className="card-body">{card.body}</p>
            </div>
            <div className="post-navigation">
                <Link to={`/posts/${prevId}`}>
                    <p className="prev-post">Post Precedente</p>
                </Link>
                <Link to={`/posts/${postId}`}>
                    <p className="next-post">Post Prossimo</p>
                </Link>
            </div>

        </>
    )
}


export default PostDetails