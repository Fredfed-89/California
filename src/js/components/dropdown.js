document.addEventListener('DOMContentLoaded', () => {
  /*
    1. по клику на пункты меню открывать дропдаун
    2. по клику (повторному) на эти пункты - закрывать дропдаун
    3. по клику в любое место сайта, кроме меню - закрывать дропдаун
  */

  const menuBtns = document.querySelectorAll('.header__item-btn');
  const drops = document.querySelectorAll('.dropdown');

  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.header__item').querySelector('.dropdown');

      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('header__item-btn--active');
        }
      });

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown--active');
        }
      });

      drop.classList.toggle('dropdown--active');
      currentBtn.classList.toggle('header__item-btn--active');

      // console.log(currentBtn);
      // console.log(drop);
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__list')) {
      menuBtns.forEach(el => {
        el.classList.remove('header__item-btn--active');
      });

      drops.forEach(el => {
        el.classList.remove('dropdown--active');
      });
    }
  });
});
