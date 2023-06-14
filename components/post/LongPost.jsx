import arrow from '../../src/images/upvote.png'
import downArrow from '../../src/images/downvote.png'


export const LongPost = ({ post, description, votes }) => {

    return (
        <>
            <div className='post'>
            <p>{description}</p>
                <p>{post.data.selftext}</p>
                <p>Read more</p>
                <div className='upvotes'>
                    <img src={arrow} id='upvote' />
                    <p id='votecount'>{votes}</p>
                    <img src={downArrow} id='downvote' />
                </div>
            </div>
        </>
    )
}