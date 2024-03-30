// import { El } from '..components/shared/El/index.js';

import { renderProducts } from '../components/page/Product/RenderProduct';
import { El } from '../components/shared/El';
import { header } from '../layout/header';
import { table } from '../layout/table';

export const todo = () => {
  renderProducts();
  return El({
    element: 'div',
    children: [header(), table()],
  });
};
