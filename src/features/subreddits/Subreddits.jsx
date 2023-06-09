import { Subreddit } from '../../../components/subreddit/Subreddit';
import { useSelector } from 'react-redux';
import { selectSubreddits } from '../subreddits/subredditsSlice';
import style from './Subreddits.module.css';

export const Subreddits = () => {
    const subreddits = useSelector(selectSubreddits);
    return (
        <div className={style.sideBar}>
            {subreddits.map(subreddit => {return(
                <Subreddit image={subreddit.image} topic={subreddit.topic} key={subreddit.id}/>
            )})}
        </div>
    )
}