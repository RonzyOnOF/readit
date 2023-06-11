import nsx from '../../src/images/nsx.jpg';


export const Post = ({ image, description}) => {
    return (
        <>
            <div className='post'>
                <img src={image} />
                <p>{description}</p>
            </div>
        </>
    )
}