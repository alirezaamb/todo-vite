import { clearInputs } from '../clearInputs';
import { validateInputs } from '../validateInput';

export const closeModal = () => {
  const overlayModal = document.getElementById('overlayModal');
  const modalAdd = document.getElementById('modalAdd');
  const modalEdit = document.getElementById('modalEdit');
  const descriptionModal = document.getElementById('modalDescription');

  overlayModal.classList.add('hidden');
  modalAdd.classList.add('hidden');
  modalEdit.classList.add('hidden');
  descriptionModal.classList.add('hidden');

  clearInputs();
};
