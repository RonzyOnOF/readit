import { Post } from '../../../components/post/Post';
import { selectIsLoading } from '../subreddits/subredditsSlice';
import { useSelector } from 'react-redux';
import { Loading } from '../../../components/loading/Loading';
import { selectSubredditFeed } from '../subreddits/subredditsSlice';

export const Posts = () => {

    const isLoading = useSelector(selectIsLoading);
    const feed = useSelector(selectSubredditFeed);
    // console.log(feed);
    // console.log('loading :' + isLoading);

    



    return (

        <>
            {isLoading ? <Loading /> : feed.map(post => {return <Post gallery={post.data.is_gallery} post={post} type={post.data.is_video} image={post.data.url} description={post.data.title} key={post.data.id} />})}
        </>
    )
}