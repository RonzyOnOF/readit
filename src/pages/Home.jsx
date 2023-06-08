import { Subreddits } from '../features/subreddits/Subreddits';
import { selectCurrentSubreddit } from '../features/subreddits/subredditsSlice';
import { useSelector } from 'react-redux';

export const Home = () => {
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    console.log(currentSubreddit);


    return (
        <>
            <p>{currentSubreddit}</p>
            <Subreddits />
        </>

    )
}