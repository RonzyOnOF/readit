import style from './Comment.module.css';

export const Comment = ({ body, score, author}) => {
    return (
        <>
            <section className={style.commentContainer}>
                <h3>{author}</h3>
                <p>{body}</p>
                <p>{score}</p>
            </section>
        </>
    )
}