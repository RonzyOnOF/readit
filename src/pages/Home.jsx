import { Subreddits } from '../features/subreddits/Subreddits';
import { selectCurrentSubreddit } from '../features/subreddits/subredditsSlice';
import { useSelector } from 'react-redux';
import nsx from '../images/nsx.jpg';
import { Post } from '../../components/post/Post';

export const Home = () => {
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    console.log(currentSubreddit);


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