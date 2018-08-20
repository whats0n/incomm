import 'select2';
// import {ACTIVE, OPEN, BODY, WIN} from '../_constants';

// const selects = $('[data-select]');
// const watch = [];

// selects.each((i, select) => {
//   select = $(select);
//   const value = select.find('[data-select-value]');
//   const items = select.find('[data-select-item]');
//   const dropdown = select.find('[data-select-dropdown]');

//   const otherSelects = selects.not(select);
//   const otherDropdowns = $('[data-select-dropdown]').not(dropdown);

//   watch.push(() => {
//     const selectTop = select.offset().top;
//     const selectBottom = selectTop + select.outerHeight();
//     const selectLeft = select.offset().left;
//     const dropdownHeight = dropdown.outerHeight();
//     const positionCondition = selectBottom + dropdownHeight >= WIN.outerHeight();

//     dropdown
//       .css({
//         top: positionCondition ? (selectTop - dropdownHeight) : selectBottom,
//         left: selectLeft,
//         width: select.outerWidth()
//       })
//       .attr('data-position', positionCondition);
//   });
  
//   dropdown.appendTo('body');
	
//   value.on('click', e => {
//     e.preventDefault();
//     select.toggleClass(ACTIVE);
//     dropdown.toggleClass(OPEN);

//     otherSelects.removeClass(ACTIVE);
//     otherDropdowns.removeClass(OPEN);
//   });

//   items.each((i, item) => {
//     item = $(item);
//     const otherItems = items.not(item);
//     const text = item.text();

//     item.on('click', e => {
//       e.preventDefault();
//       value.text(text);
//       otherItems.removeClass(ACTIVE);
//       item.addClass(ACTIVE);
//       select.removeClass(ACTIVE);
//     });
//   });
// });

// BODY.on('click', e => {
//   if ($(e.target).closest(selects).length) return;
//   selects.removeClass(ACTIVE);
//   $('[data-select-dropdown]').removeClass(OPEN);
// });

// selects.closest('[data-scrollbar]').on('scroll', e => watch.forEach(fn => fn()));
// WIN.on('load resize scroll', e => watch.forEach(fn => fn()));

$('.js-select').each((i, select) => {
  select = $(select);
  const parent = select.parent();
  const placeholder = select.data('placeholder');

  select.select2({
    minimumResultsForSearch: -1,
    dropdownParent: select.parent(),
    width: '100%'
  });
});
