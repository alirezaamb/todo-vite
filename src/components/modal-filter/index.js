import { El } from "../shared/El";

export const filterModal = () => {
    const closeFilter = ()=>{
const modalFilter = document.getElementById("modalFilter")
modalFilter.classList.add("hidden")
    }

    // const changePriority = ()=>{

    // }
// let filterData = {
//     priority : ,
//     status : ,
//     Deadline : ,
// }


  return El({
    element: "div",
    id: "modalFilter",

    className: "hidden flex flex-col h-full gap-8 w-[40%] absolute end-0  top-0  bg-blue-100 p-4 my-[60px]",
    children: [
      El({
        element: "div",
        className: "justify-between flex",
        children: [
          El({
            element: "span",
            className: "font-bold",
            innerText: "Filter",
          }),
          El({
            element: "span",
            className: "cursor-pointer font-bold",
            innerText: "X",
            onclick : closeFilter
          }),
        ],}),
        El({
            element : "span",
            className : "",
            innerText : "Priority :"
        }),
        El({
            element: 'select',
            className:
              'rounded-md cursor-pointer px-2 py-1 h-[40px]',
            name: 'Priority',
            id: 'priority_filter',
            // onchange : changePriority,
            children: [
                El({ 
                    element: 'option',
                    value: 'All',
                    innerText: 'All',
                  }),
              El({
                element: 'option',
                value: 'Low',
                innerText: 'Low',
              }),
              El({
                element: 'option',
                value: 'Medium',
                innerText: 'Medium',
              }),
              El({
                element: 'option',
                value: 'High',
                innerText: 'High',
              }),
            ],
          }),
          El({
            element : "span",
            className : "",
            innerText : "Status :"
        }),
          El({
            element: 'select',
            className:
              'rounded-md cursor-pointer px-2 py-1  h-[40px]',
            name: 'Status',
            id: 'status_filter',
            children: [
                El({ 
                    element: 'option',
                    value: 'All',
                    innerText: 'All',
                  }),
              El({ 
                element: 'option',
                value: 'ToDo',
                innerText: 'ToDo',
              }),
              El({
                element: 'option',
                value: 'Doing',
                innerText: 'Doing',
              }),
              El({
                element: 'option',
                value: 'Done',
                innerText: 'Done',
              }),
            ],
          }),
          El({
            element : "span",
            className : "",
            innerText : "Deadline"
        }),
        El({
            element: 'input',
            className: 'rounded-md border px-2 py-1 h-[40px]',
            type: 'date',
            placeholder: 'Select a date',
            id: 'date-filter',
          }),
    ],
  });
};
