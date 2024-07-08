import { lazy } from 'react';

export const ImportLazy = (comp) => {
    return lazy(() => import(`../pages/${comp}`));
};