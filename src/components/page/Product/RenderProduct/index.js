import { getTableRow } from '../../../../api/get';
import { createTableRow } from '../../../TableRow';
import { El } from '../../../shared/El';

export const renderProducts = () => {
  getTableRow().then((data) => {
    console.log(data);
    const containerTbody = document.getElementById('containerTbody');
    containerTbody.innerText = '';
    const tableRowDiv = El({
      element: 'tbody',
      children: data.map((item) => createTableRow(item)),
    });
    containerTbody.replaceWith(tableRowDiv);
  });
};
