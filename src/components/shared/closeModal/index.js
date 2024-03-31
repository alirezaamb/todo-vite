import { clearInputs } from '../clearInputs';
import { validateInputs } from '../validateInput';

export const closeModal = () => {
  const overlayModal = document.getElementById('overlayModal');
  const modalAdd = document.getElementById('modalAdd');

  overlayModal.classList.add('hidden');
  modalAdd.classList.add('hidden');

  clearInputs();
};
