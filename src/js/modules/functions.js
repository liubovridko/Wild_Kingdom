/*check browser- support webp or not*/

export function isWebp() {
  //check support
  function testWebp(callback) {
    let webp = new Image();
    webp.onload = webp.onerror = function () {
      callback(webp.height == 2);
    };
    webp.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  //add class _webp or _no-webp in HTML
  testWebp(function (support) {
    let classname = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(classname);
  });
}

/*toggle menu buger*/

export function toogleMenu() {
  var burgerIcon = document.getElementById('burgerIcon');
  var menu = document.getElementById('menu');

  // Добавляем обработчик события для клика на бургер-иконке
  burgerIcon.addEventListener('click', function () {
    // Переключаем класс "open" для меню
    menu.classList.toggle('open');
    burgerIcon.classList.toggle('menu-open');
  });

  // Добавляем обработчик события для закрытия меню при клике вне его области на маленьких экранах
  document.addEventListener('click', function (event) {
    if (
      window.innerWidth <= 768 &&
      !burgerIcon.contains(event.target) &&
      !menu.contains(event.target)
    ) {
      menu.classList.remove('open');
      burgerIcon.classList.remove('menu-open');
    }
  });
}
