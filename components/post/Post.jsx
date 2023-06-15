import arrow from '../../src/images/upvote2.png';
import downArrow from '../../src/images/downvote.png';
import { checkDescriptionLength } from '../../src/utilities/checkDescriptionLength';
import { LongPost } from './LongPost';
import style from './Post.module.css';
import { CommentIcon } from '../comments/CommentIcon';

import { getCommentsForPosts } from '../../src/utilities/getCommentsForPost';


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

    // if (isLong) {
    //     return (
    //         <>
    //             <LongPost post={post} votes={votes} description={description}/>
    //         </>
    //     )
    // }



    //check to see if media contains no image
    if (post.data.thumbnail === 'self') {
        return (
            <div className={style.post}>
                <p>{description}</p>
                <p>{post.data.selftext}</p>
                <p id={style.author}>{'posted by ' + post.data.author}</p>
                <div className={style.footerContainer} >
                    <div className={style.upvotes}>
                        <img src={arrow} id={style.upvote} />
                        <p id={style.votecount}>{votes}</p>
                        <img src={downArrow} id={style.downvote} />
                    </div>
                    <p>{post.data.num_comments}</p>
                    <CommentIcon />
                </div>
            </div>
        )
    }

    //check if post has long description
    const handleClick = () => {
        getCommentsForPosts("/r/Animemes/comments/148qblp/for_real_im_confused/");
    }

    return (
        <>
            <div className={style.post}>
                {isVideo ? <video controls><source src={video} type="video/mp4" /></video> : <img src={image}/>}
                <p>{description}</p>
                <button onClick={handleClick}>Get comments</button>
                <p id={style.author}>{'posted by ' + post.data.author}</p>
                <div className={style.footerContainer}>
                    <div className={style.upvotes}>
                        <img src={arrow} id={style.upvote} />
                        <p id='votecount'>{votes}</p>
                        <img src={downArrow} id={style.downvote} />
                    </div>
                    <div className={style.commentContainer}>
                        <p id={style.commentNumber}>{post.data.num_comments}</p>
                        <CommentIcon />
                    </div>
                </div>
            </div>
        </>
    )
}