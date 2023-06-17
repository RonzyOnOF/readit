import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../components/post/Post';
import { useSelector } from 'react-redux';
import { selectSubredditFeed } from '../features/subreddits/subredditsSlice';
import { getCommentsForPosts } from '../utilities/getCommentsForPost';


export const PostPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const feed = useSelector(selectSubredditFeed);
    const singlePost = feed.filter(post => post.data.id === id);
    const comments = getCommentsForPosts(singlePost[0].data.permalink);
    

    //looking for author, body, score
    return (
        <>
          <h1>Post page for {id}</h1>
          <button onClick={() => navigate('/')}>go back to posts</button>
          <Post
           gallery={singlePost[0].data.is_gallery}
           commentNumber={singlePost[0].data.num_comments}
           author={singlePost[0].data.author} 
           selftext={singlePost[0].data.selftext} 
           post={singlePost[0]} 
           thumbnail={singlePost[0].data.thumbnail} 
           type={singlePost[0].data.is_video} 
           image={singlePost[0].data.url} 
           description={singlePost[0].data.title} 
           key={singlePost[0].data.id} 
           votes={singlePost[0].data.ups}
           isIndividualPost={true}/> 
        </>

    )
}