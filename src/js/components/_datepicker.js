import {OPEN, ACTIVE} from '../_constants';

$('[data-datepicker]').each((i, datepicker) => {
  datepicker = $(datepicker);
  const input = datepicker.find('[data-datepicker-input]');
  const container = datepicker.find('[data-datepicker-container]');
  const items = datepicker.find('[data-datepicker-item]');

  input
    .attr('readonly', true)
    .on('focus', e => container.addClass(OPEN))
    .on('blur', e => container.removeClass(OPEN));

  items.each((i, item) => {
    item = $(item);
    const other = items.not(item);
    const value = item.data('datepicker-item');

    item.on('click', e => {
      e.preventDefault();
      other.removeClass(ACTIVE);
      item.addClass(ACTIVE);
      input.val(value);
    });
  });
});
