import { getTableRow } from '../../../../api/get';
import { createTableRow } from '../../../TableRow';
import { El } from '../../../shared/El';

export const renderProducts = (findItem = '', page, filters) => {
  getTableRow(findItem, page, filters).then((data) => {
    const containerTbody = document.getElementById('table-one');
    const tableTbody = document.getElementById('tableTbody');
    tableTbody.innerText = '';
    let tableRowDiv = El({
      element: 'tbody',
      id: 'tableRowDiv',
      children: data.data.map((item) => createTableRow(item)),
    });
    containerTbody.append(tableRowDiv);
  });
};
