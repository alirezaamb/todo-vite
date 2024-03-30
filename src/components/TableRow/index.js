import { deleteData } from "../../api/delete";
import { renderProducts } from "../page/Product/RenderProduct";
import { El } from "../shared/El";

export const createTableRow = (data) => {
  const deleteRow = () => {
    deleteData(data.id).then((res) => {
      const tableTbody = document.getElementById("tableTbody");
      tableTbody.innerHTML = "loading...";
      console.log("here");
      const tableRowDiv = document.getElementById("tableRowDiv");
      tableRowDiv.remove();

      document.getElementById("page").innerText = "1";
      renderProducts("", page);
    });
    // .catch((err) => console.error(err));
  };

  return El({
    element: "tr",
    className: "p-4 text-center h-[20px]",
    children: [
      El({
        element: "td",
        className: "text-left border border-slate-300 px-3",
        innerText: data.title,
      }),
      El({
        element: "td",
        className: "border border-slate-300",
        children: [
          El({
            element: "span",
            className: `px-3 py-1 rounded-2xl  ${data.priorityColor} `,
            innerText: data.priority,
          }),
        ],
      }),
      El({
        element: "td",
        className: "border border-slate-300 ",
        children: [
          El({
            element: "span",
            className: `px-3 py-1 rounded-2xl ${data.statusColor}`,
            innerText: data.status,
          }),
        ],
      }),
      El({
        element: "td",
        className: "border border-slate-300 ",
        children: [
          El({
            element: "span",
            className: `border rounded-2xl px-2 py-1 border-blue-500 `,
            innerText: data.deadline,
          }),
        ],
      }),
      El({
        element: "td",
        className: "flex gap-3 justify-center p-5 border border-slate-300 ",
        children: [
          El({
            element: "img",
            className: "w-6 cursor-pointer bg-red-500 rounded",
            src: "../../src/assets/image/trash-solid.svg",
            eventListener: [
              {
                event: "click",
                callback: deleteRow,
              },
            ],
          }),
          El({
            element: "img",
            className: "w-6 cursor-pointer bg-blue-500 rounded",
            src: "../../src/assets/image/edit-solid.svg",
            // eventListener:[{
            //     event:'click',
            //     callback:editRow
            // }]
          }),
          El({
            element: "img",
            className: "w-6 cursor-pointer bg-gray-500 rounded",
            src: "../../src/assets/image/eye-solid.svg",
            // eventListener:[{
            //     event:'click',
            //     callback:modal
            // }]
          }),
        ],
      }),
    ],
  });
};
