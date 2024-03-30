// import { El } from '..components/shared/El/index.js';

import { El } from '../components/shared/El';
import { header } from '../layout/header';
import { table } from '../layout/main';

export const todo = () => {
  return El({
    element: 'div',
    children: [header() , table()],
  });
};
