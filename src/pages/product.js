// import { El } from '..components/shared/El/index.js';

import { El } from '../components/shared/El';
import { header } from '../layout/header';

export const todo = () => {
  return El({
    element: 'div',
    className: 'bg-red-400',
    // children: [header()],
  });
};
