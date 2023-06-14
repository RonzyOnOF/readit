import arrow from '../../src/images/upvote.png'
import downArrow from '../../src/images/downvote.png'
import style from './Post.module.css';


export const LongPost = ({ post, description, votes }) => {

    return (
        <>
            <div className={style.post}>
            <p>{description}</p>
                <p>{post.data.selftext}</p>
                <p>Read more</p>
                <div className={style.upvotes}>
                    <img src={arrow} id={style.upvote}/>
                    <p id={style.votecount}>{votes}</p>
                    <img src={downArrow} id={style.downvote} />
                </div>
            </div>
        </>
    )
}