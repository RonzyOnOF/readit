import styles from './Subreddit.module.css';

export const Subreddit = (props) => {
    const { image, topic, onClick }  = props;


    return (
        <div className={styles.subredditContainer} onClick={onClick}>
            <img src={image}  />
            <p>{topic}</p>
        </div>
    )
}