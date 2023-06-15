import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../components/post/Post';

export const PostPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    return (
        <>
          <h1>Post page for {id}</h1>
          <button onClick={() => navigate('/')}>go back to posts</button>
          {/* <Post /> */}
        </>

    )
}