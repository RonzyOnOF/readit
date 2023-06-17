import { Post } from '../../../components/post/Post';
import { selectIsLoading } from '../subreddits/subredditsSlice';
import { useSelector } from 'react-redux';
import { Loading } from '../../../components/loading/Loading';
import { selectSubredditFeed } from '../subreddits/subredditsSlice';
import { useNavigate } from 'react-router-dom';


export const Posts = () => {

    const navigate = useNavigate();
    const isLoading = useSelector(selectIsLoading);
    const feed = useSelector(selectSubredditFeed);


    const clickPost = (post) => {
        const { id } = post.data;
        console.log('id from post: ' + id);
        navigate(`/post/${id}`);
    }



    return (

        <>
            {isLoading ? <Loading /> : feed.map(post => {return <Post clickPost={() => clickPost(post)} isIndividualPost={false} commentNumber={post.data.num_comments} author={post.data.author} selftext={post.data.selftext} post={post} thumbnail={post.data.thumbnail} gallery={post.data.is_gallery} type={post.data.is_video} image={post.data.url} description={post.data.title} key={post.data.id} votes={post.data.ups} />})}
        </>
    )
}