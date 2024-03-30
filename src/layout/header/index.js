import { El } from '../../components/shared/El';

export const header = () => {
  return El({
    element: 'div',
    className: 'text-white bg-[#6900e8] flex justify-between p-2',
    children: [
      El({
        element: 'div',
        className: 'flex gap-2 justify-center items-center',
        children: [
          El({
            element: 'img',
            className: 'w-7 h-5',
            src: '../assets/image/icon-menu.png',
          }),
          El({
            element: 'span',
            className: 'text-[15px]',
            innerText: 'My To-Do Tasks',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-2 items-center justify-end w-[50%]',
        children: [
          El({
            element: 'div',
            className: 'flex justify-end',
            children: [
              El({
                element: 'img',
                className: 'bg-[#8220eb] rounded-l-[5px] pl-1 w-7',
                src: '../../assets/image/icon-search.png',
              }),
              El({
                element: 'input',
                className:
                  'outline-none bg-[#8220eb] w-[80%] text-[13px] end-0 rounded-r-[5px]',
                type: 'text',
                placeholder: 'search',
                id: 'input',
              }),
            ],
          }),
          El({
            element: 'img',
            src: '../../assets/image/icon-filter.png',
            className: 'w-7 h-7',
          }),
          El({
            element: 'img',
            src: '../../assets/image/icon-add.png',
            className: 'w-7 h-7',
            id: 'icon-add',
          }),
        ],
      }),
    ],
  });
};
