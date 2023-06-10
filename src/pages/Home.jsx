import { Subreddits } from '../features/subreddits/Subreddits';
import { selectCurrentSubreddit } from '../features/subreddits/subredditsSlice';
import { useSelector } from 'react-redux';
import { Post } from '../../components/post/Post';

export const Home = () => {
    const currentSubreddit = useSelector(selectCurrentSubreddit);


    return (
        <>
            <div className='home-container'>
                <div className='topic-container'>
                    <p>{currentSubreddit}</p>
                    <Post />
                </div>
                <div className='sub-container'>
                    <p>Subreddits</p>
                    <Subreddits />
                </div>
            </div>
        </>

    )
}