import { Subreddits } from '../features/subreddits/Subreddits';
import { selectCurrentSubreddit } from '../features/subreddits/subredditsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadSubreddit } from '../features/subreddits/subredditsSlice';
import { Posts } from '../features/posts/Posts';

export const Home = () => {
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const dispatch = useDispatch();
    
    //converts r/subreddit into subreddit format to fetch data
    const subredditFormat = currentSubreddit.substring(2, currentSubreddit.length);

    useEffect(() => {
       dispatch(loadSubreddit(subredditFormat));
    }, [dispatch])

    



    return (
        <>
            <div className='home-container'>
                <div className='topic-container'>
                    <p id='subreddit-title-dark'>{currentSubreddit}</p>
                    <Posts />
                </div>
                <div className='sub-container'>
                    <p>Subreddits</p>
                    <Subreddits />
                </div>
            </div>
        </>

    )
}