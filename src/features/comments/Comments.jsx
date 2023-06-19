import { useSelector } from 'react-redux';
import { selectComments, selectIsCommentLoading, selectFailedToLoad } from '../comments/commentsSlice';
import { Loading } from '../../../components/loading/Loading';
import { Comment } from '../../../components/comments/Comment';


export const Comments = () => {
    const comments = useSelector(selectComments);
    const isLoading = useSelector(selectIsCommentLoading);
    const failedToLoad = useSelector(selectFailedToLoad);

    return (
        <>
            <div className='comments-container'>
                {isLoading ? <Loading /> : comments.map(comment => <Comment author={comment.data.author} body={comment.data.body} score={comment.data.score} key={comment.data.id}/>)}
            </div>
        </>
    )
}