import { getTableRow } from "../../../../api/get";
import { createTableRow } from "../../../TableRow";
import { El } from "../../../shared/El";

// export const renderProducts = () => {
//   getTableRow().then((data) => {
//     console.log(data);
//     const containerTbody = document.getElementById('tableTbody');
//     containerTbody.innerText = '';
//     const tableRowDiv = El({
//       element: 'tbody',
//       id: 'tableRowDiv',
//       children: data.map((item) => createTableRow(item)),
//     });
//     containerTbody.replaceWith(tableRowDiv);
//   });
// };

//another way

export const renderProducts = (findItem = "") => {
  getTableRow((findItem)).then((data) => {
    console.log(data);
    const tableTbody = document.getElementById("tableTbody");
    const containerTbody = document.getElementById("table-one");
    tableTbody.innerText = "";
    const tableRowDiv = El({
      element: "tbody",
      children: data.map((item) => createTableRow(item)),
    });
    containerTbody.append(tableRowDiv);
  });
};
