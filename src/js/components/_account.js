import {ACTIVE} from '../_constants';

$('.js-account-item').each((i, item) => {
  item = $(item);
  const control = item.find('.js-account-control');
  const container = item.find('.js-account-container');

  control.on('click', e => {
    e.preventDefault();
    container.toggleClass(ACTIVE);
  });
});
