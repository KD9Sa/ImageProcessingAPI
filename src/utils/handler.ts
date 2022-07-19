import path from 'path';

const originalPath = path.resolve(__dirname, '../../public/imgs/original');
const thumbnailsPath = path.resolve(__dirname, '../../public/imgs/thumbnails');

// Returns the path of the image in imgs/original folder provided the image name
const getImagePath = (imageName: string): string => {
    return path.resolve(originalPath + `/${imageName}.jpg`);
};

// Returns the path of the thumbnail in imgs/thumbnails folder provided the thumbnail name
const getThumbnailPath = (
    imageName: string,
    width: number,
    height: number
): string => {
    return path.resolve(
        thumbnailsPath + `/${imageName}_${width}x${height}.jpg`
    );
};

// Returns the pattern used to give a thumbnail its name in imgs/thumbnails folder
// Example: fjord_600x700.jpg is a possible name of a thumbnail in imgs/thumbnails folder
// The pattern for this thumbnail is: fjord_600x700
const getThumbnailPattern = (
    imageName: string,
    width: number,
    height: number
): string => {
    return `${imageName}_${width}x${height}`;
};

export default {
    originalPath,
    thumbnailsPath,
    getImagePath,
    getThumbnailPath,
    getThumbnailPattern
};
