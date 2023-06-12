
export const Post = ({ image, description, type, post}) => {

    let isVideo;
    let video;

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

    if (post.data.thumbnail === 'self') {
        return (
            <div className='post'>
                <p>{description}</p>
            </div>
        )
    }

    return (
        <>
            <div className='post'>
                {isVideo ? <video controls><source src={video} type="video/mp4" /></video> : <img src={image}/>}
                <p>{description}</p>
            </div>
        </>
    )
}