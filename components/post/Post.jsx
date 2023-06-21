import arrow from '../../src/images/upvote2.png';
import downArrow from '../../src/images/downvote.png';
import style from './Post.module.css';
import { CommentIcon } from '../comments/CommentIcon';
import { useState, useEffect } from 'react';



export const Post = ({ image, description, type, gallery, votes, clickPost, thumbnail, post, selftext, author, commentNumber, isIndividualPost }) => {

    const [isVideo, setIsVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        //check if type of post is a video
        switch(type) {
            case false:
                setIsVideo(false);
                break;
            case true:
                setVideoUrl(post.data.media.reddit_video.fallback_url);
                setIsVideo(true);
                break;
            default:
                break;
        }
    }, [type])

 

    //check if media contains multiple images to be ignored for now
    if (gallery) {
        return (
            <>
            </>
        )
    }

  


    //check to see if media contains no image
    if (thumbnail === 'self' || post.data.is_self === true) {
        return (
            <div className={isIndividualPost ? style.singlePost : style.post} onClick={clickPost}>
                <p>{description}</p>
                <p id={style.self}>{selftext}</p>
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

    return (
        <>
            <div className={isIndividualPost ? style.singlePost : style.post} onClick={clickPost}>
                {isVideo ? <video controls><source src={post.data.media.reddit_video.fallback_url} type="video/mp4" /></video> : <img src={image}/>}
                <p id={style.self} >{description}</p>
                {/* <button onClick={handleClick}>Get comments</button> */}
                <p id={style.author}>{'posted by ' + author}</p>
                <div className={isIndividualPost ? style.singleFooterContainer : style.footerContainer}>
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
        </>
    )
}