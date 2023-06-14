
export const getCommentsForPosts = async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await response.json();
    console.log(json[1].data.children);
    return json[1].data.children;
}