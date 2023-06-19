import style from './Comment.module.css';
import { selectIsCommentLoading } from '../../src/features/comments/commentsSlice';
import { useSelector } from 'react-redux';

export const Comment = ({ body, score, author}) => {
    const isLoading = useSelector(selectIsCommentLoading);
    console.log(isLoading);

    return (
        <>
            <section className={isLoading ? style.loadingComment : style.commentContainer}>
                <h3>{author}</h3>
                <p>{body}</p>
                <p>{score}</p>
            </section>
        </>
    )
}