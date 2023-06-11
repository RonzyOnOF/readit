import { Subreddits } from '../features/subreddits/Subreddits';
import { selectCurrentSubreddit } from '../features/subreddits/subredditsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadSubreddit } from '../features/subreddits/subredditsSlice';
import { Posts } from '../features/posts/Posts';

export const Home = () => {
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(loadSubreddit());
    }, [dispatch])

    



    return (
        <>
            <div className='home-container'>
                <div className='topic-container'>
                    <p>{currentSubreddit}</p>
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