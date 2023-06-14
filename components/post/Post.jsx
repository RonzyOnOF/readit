import arrow from '../../src/images/upvote2.png';
import downArrow from '../../src/images/downvote.png';
import { checkDescriptionLength } from '../../src/utilities/checkDescriptionLength';
import { LongPost } from './LongPost';


export const Post = ({ image, description, type, post, gallery, votes }) => {

    let isVideo;
    let video;

    const isLong = checkDescriptionLength(post.data.selftext);


    //check if media type is a video or just image
    switch(type) {
        case false:
            isVideo = false;
            break;
        case true:
            video = post.data.media.reddit_video.fallback_url; 
            isVideo = true;
            break;
        default:
            break;

    }

    //check if media contains multiple images to be ignored for now
    if (gallery) {
        return (
            <>
            </>
        )
    }

    if (isLong) {
        return (
            <>
                <LongPost post={post} votes={votes} description={description}/>
            </>
        )
    }

    //check to see if media contains no image
    if (post.data.thumbnail === 'self') {
        return (
            <div className='post'>
                <p>{description}</p>
                <p>{post.data.selftext}</p>
                <div className='upvotes'>
                    <img src={arrow} id='upvote' />
                    <p id='votecount'>{votes}</p>
                    <img src={downArrow} id='downvote' />
                </div>
            </div>
        )
    }

    //check if post has long description


    return (
        <>
            <div className='post'>
                {isVideo ? <video controls><source src={video} type="video/mp4" /></video> : <img src={image}/>}
                <p>{description}</p>
                <div className='upvotes'>
                    <img src={arrow} id='upvote' />
                    <p id='votecount'>{votes}</p>
                    <img src={downArrow} id='downvote' />
                </div>
            </div>
        </>
    )
}