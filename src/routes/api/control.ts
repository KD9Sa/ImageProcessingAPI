import express, { Router, Request, Response } from 'express';
import validator from '../../utils/validator';
import imgProcess from '../../utils/img-process';
import handler from '../../utils/handler';

const controlRoute: Router = express.Router();

controlRoute.get('/', async (req: Request, res: Response): Promise<void> => {
    // Create the folder public/imgs/thumbnails if it does not exist in the path
    validator.thumbnailsFolderExist();

    // Collect the parameters from the request
    const imageName = req.query.imageName?.toString();
    const width = parseInt(req.query.width as unknown as string);
    const height = parseInt(req.query.height as unknown as string);

    // Either a path of the original image if no width and height provided
    // or a path of the thumbnail to be displayed
    let imagePath = '';

    if (!imageName) {
        res.send(
            'An imageName parameter is missing. Kindly refer to the home page for an example of a valid url.'
        );
        return;
    }

    if (!validator.imageExist(imageName)) {
        res.send(
            'The image name provided does not exist in public/imgs/original folder.'
        );
        return;
    }

    // If width and height are not provided display the original image
    if (!width && !height) {
        imagePath = handler.getImagePath(imageName);
        res.sendFile(imagePath);

        // Inform the user if the width parameter is missing or has an incorrect value
    } else if (!width && height >= 0) {
        res.send(
            'The width parameter is either missing or has an invalid value.'
        );

        // Inform the user if the height parameter is missing or has an incorrect value
    } else if (!height && width >= 0) {
        res.send(
            'The height parameter is either missing or has an invalid value.'
        );

        // Resize and create a new thumbnail if it does not exist already in imgs/thumbnails folder
    } else if (!validator.thumbnailExist(imageName, width, height)) {
        await imgProcess.resizeImage(imageName, width, height);
        imagePath = handler.getThumbnailPath(imageName, width, height);
        res.sendFile(imagePath);

        // Display the image directly without reprocessing it if it exists in imgs/thumbnails folder
    } else if (validator.thumbnailExist(imageName, width, height)) {
        imagePath = handler.getThumbnailPath(imageName, width, height);
        res.sendFile(imagePath);
    }
});

export default controlRoute;
