  // dynamic adapt
//   const da = new DynamicAdapt('max')
//   da.init()

  // header - при скролі додати клас scroll до шапки зменшує шапку змінює фон
  const headerElement = document.querySelector('.header')

  // додає до хедеру клас _scroll коли прокручуємо на висоту шапки і навпаки
  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove('_scroll')
    } else {
      headerElement.classList.add('_scroll')
    }
  }

  const headerObserver = new IntersectionObserver(callback)
  headerObserver.observe(headerElement) // IntersectionObserver починає стежити над хедером