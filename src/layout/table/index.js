import { createTableRow } from '../../components/TableRow';
import { El } from '../../components/shared/El';

export const table = () => {
  return El({
    element: 'section',
    className: 'w-100% mt-10',
    children: [
      El({
        element: 'table',
        className:
          'text-center justify-center border-collapse items-center m-auto w-full',
        id: 'table-one',
        children: [
          El({
            element: 'thead',
            children: [
              El({
                element: 'tr',
                className: 'h-[50px]',
                id: 'tr-one',
                children: [
                  El({
                    element: 'th',
                    className: 'border border-slate-300 w-[20%]',
                    innerText: 'Task name',
                  }),
                  El({
                    element: 'th',
                    className: 'border border-slate-300 w-[20%]',
                    innerText: 'Priority',
                  }),
                  El({
                    element: 'th',
                    className: 'border border-slate-300 w-[20%]',
                    innerText: 'Status',
                  }),
                  El({
                    element: 'th',
                    className: 'border border-slate-300 w-[20%]',
                    innerText: 'Deadline',
                  }),
                  El({
                    element: 'th',
                    className: 'border border-slate-300 w-[20%]',
                    innerText: 'Actions',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'tbody',
            id: 'tableTbody',
            innerText: 'loading...',
            children: [],
          }),
        ],
      }),
    ],
  });
};