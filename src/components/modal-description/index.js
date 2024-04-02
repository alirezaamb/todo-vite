import { El } from '../shared/El';

export const DesModal = () => {
  return El({
    element: 'div',
    id: 'modalDescription',
    className:
      'absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-2/4 h-2/4 bg-gray-200 rounded p-2 hidden',
    children: [
      El({
        element: 'h3',
        className: 'font-bold',
        id: 'description-title',
      }),
      El({
        element: 'p',
        id: 'description-description',
      }),
    ],
  });
};
