import arrow from '../../src/images/upvote2.png';
import downArrow from '../../src/images/downvote.png';
import style from './Post.module.css';
import { CommentIcon } from '../comments/CommentIcon';



export const Post = ({ image, description, type, gallery, votes, clickPost, thumbnail, post, selftext, author, commentNumber, isIndividualPost }) => {

    let isVideo;
    let videoUrl;
    //check if media type is a video or just image
    switch(type) {
        case false:
            isVideo = false;
            break;
        case true:
            videoUrl = post.data.media.reddit_video.fallback_url; 
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

    //check to see if media contains no image
    if (thumbnail === 'self') {
        return (
            <div className={isIndividualPost ? style.singlePost : style.post} onClick={clickPost}>
                <p>{description}</p>
                <p>{selftext}</p>
                <p id={style.author}>{'posted by ' + author}</p>
                <div className={isIndividualPost ? style.singleFooterContainer : style.footerContainer} >
                    <div className={style.upvotes}>
                        <img src={arrow} id={style.upvote} />
                        <p id={style.votecount}>{votes}</p>
                        <img src={downArrow} id={style.downvote} />
                    </div>
                    <div className={style.commentContainer}>
                        <p id={style.commentNumber}>{commentNumber}</p>
                        <CommentIcon isIndividualPost={isIndividualPost} />
                    </div>
                </div>
            </div>
        )
    }

    //get comments for post
    const handleClick = (post) => {
        const { permalink } = post.data;
        console.log(permalink)
        // getCommentsForPosts("/r/Animemes/comments/148qblp/for_real_im_confused/");
    }

    return (
        <>
            <div className={isIndividualPost ? style.singlePost : style.post} onClick={clickPost}>
                {isVideo ? <video controls><source src={post.data.media.reddit_video.fallback_url} type="video/mp4" /></video> : <img src={image}/>}
                <p>{description}</p>
                {/* <button onClick={handleClick}>Get comments</button> */}
                <p id={style.author}>{'posted by ' + author}</p>
                <div className={isIndividualPost ? style.singleFooterContainer : style.footerContainer}>
                    <div className={style.upvotes}>
                        <img src={arrow} id={style.upvote} />
                        <p id='votecount'>{votes}</p>
                        <img src={downArrow} id={style.downvote} />
                    </div>
                    <div className={style.commentContainer}>
                        <p id={style.commentNumber}>{commentNumber}</p>
                        <CommentIcon isIndividualPost={isIndividualPost} />
                    </div>
                </div>
            </div>
        </>
    )
}