import {OPEN} from '../_constants';

const controls = $('[data-modal-target]');
const modals = $('[data-modal]');

controls.each((i, control) => {
  control = $(control);
  const target = control.data('modal-target');
  const modal = modals.filter(`[data-modal="${target}"]`);

  control.on('click', e => {
    e.preventDefault();
    modal.addClass(OPEN);
  });
});

modals.each((i, modal) => {
  modal = $(modal);
  const container = modal.find('[data-modal-container]');
  const close = modal.find('[data-modal-close]');

  modal.on('click', e => {
    if ($(e.target).closest(container).length) return;
    modal.removeClass(OPEN);
  });

  close.on('click', e => {
    e.preventDefault();
    modal.removeClass(OPEN);
  });
});
