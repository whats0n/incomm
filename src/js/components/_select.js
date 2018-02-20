import {ACTIVE, BODY} from '../_constants';

const selects = $('[data-select]');

selects.each((i, select) => {
  select = $(select);
  const otherSelects = selects.not(select);
  const value = select.find('[data-select-value]');
  const items = select.find('[data-select-item]');
	
  value.on('click', e => {
    e.preventDefault();
    select.toggleClass(ACTIVE);
    otherSelects.removeClass(ACTIVE);
  });

  items.each((i, item) => {
    item = $(item);
    const otherItems = items.not(item);
    const text = item.text();

    item.on('click', e => {
      e.preventDefault();
      value.text(text);
      otherItems.removeClass(ACTIVE);
      item.addClass(ACTIVE);
      select.removeClass(ACTIVE);
    });
  });
});

BODY.on('click', e => {
  if ($(e.target).closest(selects).length) return;
  selects.removeClass(ACTIVE);
});
