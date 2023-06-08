import { Subreddit } from '../../../components/subreddit/Subreddit';
import { useSelector } from 'react-redux';
import { selectSubreddits } from '../subreddits/subredditsSlice';

export const Subreddits = () => {
    const subreddits = useSelector(selectSubreddits);
    return (
        <div className='sidebar-container'>
            {subreddits.map(subreddit => {return(
                <Subreddit image={subreddit.image} topic={subreddit.topic} key={subreddit.id}/>
            )})}
        </div>
    )
}