
export const Subreddit = (props) => {
    const { image, topic }  = props;

    return (
        <div className='subreddit-container'>
            <img src={image} />
            <p>{topic}</p>
        </div>
    )
}