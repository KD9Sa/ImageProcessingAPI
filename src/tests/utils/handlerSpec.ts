import handler from '../../utils/handler';
import path from 'path';

describe('Testing handler.ts', (): void => {
    describe('Test getImagePath function', (): void => {
        it('should return the path of fjord.jpg image', (): void => {
            const imagePath = path.resolve(
                __dirname,
                '../../../public/imgs/original/fjord.jpg'
            );
            expect(handler.getImagePath('fjord')).toEqual(imagePath);
        });

        it('should return the path of encenadaport.jpg image', (): void => {
            const imagePath = path.resolve(
                __dirname,
                '../../../public/imgs/original/encenadaport.jpg'
            );
            expect(handler.getImagePath('encenadaport')).toEqual(imagePath);
        });
    });
});
