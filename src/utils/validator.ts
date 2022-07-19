import fs from 'fs';
import handler from './handler';

const imageExist = (imageName: string): boolean => {
    // Generates a list of all images in imgs/original folder excluding the extension
    const imagesList: string[] | undefined = fs
        .readdirSync(handler.originalPath)
        .map((image) => image.substring(0, image.indexOf('.')));

    // If the image does not exists in the list of all images return false otherwise return true
    if (!imagesList.includes(imageName)) return false;
    return true;
};

const thumbnailExist = (
    imageName: string,
    width: number,
    height: number
): boolean => {
    // Generates a list of all thumbnails in imgs/thumbnails folder excluding the extension
    const thumbnailsList: string[] | undefined = fs
        .readdirSync(handler.thumbnailsPath)
        .map((image) => image.substring(0, image.indexOf('.')));

    const thumbnailName = handler.getThumbnailPattern(imageName, width, height);

    // If the thumbnail does not exists in the list of all thumbnails return false otherwise return true
    if (!thumbnailsList.includes(thumbnailName)) return false;
    return true;
};

const thumbnailsFolderExist = (): boolean => {
    // Create the folder public/imgs/thumbnails if it does not exist in the path
    if (!fs.existsSync(handler.thumbnailsPath))
        fs.mkdirSync(handler.thumbnailsPath);

    return true;
};

export default {
    imageExist,
    thumbnailExist,
    thumbnailsFolderExist
};
