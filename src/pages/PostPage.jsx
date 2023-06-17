import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../components/post/Post';
import { useSelector } from 'react-redux';
import { selectSubredditFeed } from '../features/subreddits/subredditsSlice';
import { getCommentsForPosts } from '../utilities/getCommentsForPost';
import style from './PostPage.module.css';


export const PostPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const feed = useSelector(selectSubredditFeed);
    const singlePost = feed.filter(post => post.data.id === id);
    const comments = getCommentsForPosts(singlePost[0].data.permalink);
    

    //looking for author, body, score
    return (
        <>
          <div className={style.buttonContainer}>
            <button id={style.goBack} onClick={() => navigate('/')}>Go back to posts</button>
          </div>
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