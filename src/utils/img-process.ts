import sharp from 'sharp';
import handler from './handler';

// Resizing images using sharp package
const resizeImage = async (
    imageName: string,
    width: number,
    height: number
): Promise<string | null> => {
    // Get the path of the image in imgs/original folder
    const imagePath: string = handler.getImagePath(imageName);

    // Preparing the export path for the created thumbnail
    const thumbnailPath: string = handler.getThumbnailPath(
        imageName,
        width,
        height
    );

    try {
        await sharp(imagePath).resize({ width, height }).toFile(thumbnailPath);
        return null;
    } catch (error) {
        return 'Uh oh! Could not resize the image. Something went wrong.';
    }
};

export default { resizeImage };
