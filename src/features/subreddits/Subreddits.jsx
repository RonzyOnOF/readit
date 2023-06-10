import { Subreddit } from '../../../components/subreddit/Subreddit';
import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits, changeCurrentSubreddit } from '../subreddits/subredditsSlice';
import style from './Subreddits.module.css';

export const Subreddits = () => {
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch();

    const handleClick = (e) => {
       const { nodeName } = e.target;
       switch (nodeName) {
        case 'IMG':
            const text = e.target.nextElementSibling.innerHTML;
            dispatch(changeCurrentSubreddit(`r/${text}`));
            break;
        case 'DIV':
            // console.log(e);
            const newText = e.target.childNodes[1].innerHTML;
            dispatch(changeCurrentSubreddit(`r/${newText}`));
            break;
        case 'P':
            const updatedText = e.target.innerHTML;
            dispatch(changeCurrentSubreddit(`r/${updatedText}`));
            break;
        default:
            break;

       }
    }


    return (
        <div className={style.sideBar}>
            {subreddits.map(subreddit => {return(
                <Subreddit image={subreddit.image} topic={subreddit.topic} key={subreddit.id} onClick={handleClick} />
            )})}
        </div>
    )
}