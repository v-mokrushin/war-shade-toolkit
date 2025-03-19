import type { Nation } from '../types';

const BASE_ROUTE = '/images/flags';

export const getNation = (
    nameKey: string,
    pathKey: string,
    imageName: string
): Nation => {
    return {
        nameKey,
        pathKey,
        imagePath: `${BASE_ROUTE}/{imageName}`,
    };
};
