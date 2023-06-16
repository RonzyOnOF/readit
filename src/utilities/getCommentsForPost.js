

//fetches comments for post returning an object 
export const getCommentsForPosts = async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await response.json();
    if (json[1].data.children[0] === undefined) {
        console.log('no comments');
        return;
    }
    console.log(json[1].data.children[0].data);
    return json[1].data.children[0].data;
}