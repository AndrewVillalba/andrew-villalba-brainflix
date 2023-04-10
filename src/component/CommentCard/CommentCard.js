import '../CommentCard/CommentCard.scss'


function CommentCard({comments}){
    return (
        <div>
            <div></div>
            <div>
                <p>{comments.name}</p>
                <p>{new Date(comments.timestamp).toLocaleDateString()}</p>
            </div>
            <p>{comments.comment}</p>
        </div>
    )
}

export default CommentCard;