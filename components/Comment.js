import { useEffect, useState } from "react"
import {FaThumbsUp} from "react-icons/fa"


export default function Comment({id}) {

    const [comments,setComments] = useState(null);

    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data=>{
            setComments(data)
        })

    },[])

    return (
        <>
            {
                comments
                &&
                <ul>
                    <li className="w3-ul">
                        <span style={{verticalAlign:'middle'}}><FaThumbsUp size={24} onClick={()=>{alert('Liked')}} /></span>
                        &nbsp;&nbsp;
                        <span style={{fontSize:'24px',verticalAlign:'middle'}}>Shanaka and 3 other liked</span>
                    </li>
                    {
                        comments.map(({name,body})=><li className="w3-ul" key={name}><h4>{name}</h4><p>{body}</p></li>)
                    }
                </ul>
            }
        </>
    )

}