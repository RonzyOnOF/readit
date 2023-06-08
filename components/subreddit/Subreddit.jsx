import styles from './Subreddit.module.css';

export const Subreddit = (props) => {
    const { image, topic }  = props;

    return (
        <div className={styles.subredditContainer}>
            <img src={image} />
            <p>{topic}</p>
        </div>
    )
}