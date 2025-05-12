export const checkImageURL = (url) => {
    //console.log('Checking URL:', url);
    if (!url) {
        //console.log("no url!");
        return false
    }
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        //console.log(pattern.test(url));
        return true;
    }
};
