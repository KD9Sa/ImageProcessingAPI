import validator from '../../utils/validator';
import fs from 'fs';
import handler from '../../utils/handler';

describe('Testing validator.ts', (): void => {
    describe('Test imageExist function', (): void => {
        it('should return false when sending imageName=egypt', (): void => {
            expect(validator.imageExist('egypt')).toBeFalse();
        });

        it('should return true when sending imageName=icelandwaterfall', (): void => {
            expect(validator.imageExist('icelandwaterfall')).toBeTrue();
        });
    });

    describe('Test thumbnailsFolderExist and thumbnailExist functions', (): void => {
        // Deleting the thumbnails folder
        beforeAll(() => {
            try {
                fs.rmSync(handler.thumbnailsPath, {
                    recursive: true,
                    force: true
                });
            } catch (error) {
                console.log('');
            }
        });

        // Thumbnails folder is deleted by the function above
        // The call to thumbnailsFolderExist function should create the folder again
        it('should return true when calling the function thumbnailsFolderExist', (): void => {
            expect(validator.thumbnailsFolderExist()).toBeTrue();
        });

        // After thumbnailsFolderExist function created thumbnails folder it is now empty
        // Searching for any thumbnail should always return false
        it('should return false when sending imageName=fjord, width=400, height=500', (): void => {
            expect(validator.thumbnailExist('fjord', 400, 500)).toBeFalse();
        });
    });
});
