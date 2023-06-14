

export const checkDescriptionLength = (description) => {

    if (description.length > 230 ) {
        return true;
    } else {
        return false;
    }
}