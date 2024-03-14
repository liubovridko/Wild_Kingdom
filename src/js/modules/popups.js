//************ Отримую змінні **************/
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')
const popupLinks = document.querySelectorAll('.popup-link')
let unlock = true

const timeout = 800

// при натисканні на посилання шукає отримує id попапа і передає його в функцію
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index]

    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('data-popup').replace('#', '')
      const curentPopup = document.getElementById(popupName)
      popupOpen(curentPopup)
      e.preventDefault()
    })
  }
}

// шукає всі хрестики для закриття і при натисканні закриває попап (найближчого батька з класом .popup)
const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index]
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'))
      e.preventDefault()
    })
  }
}

// відкриває попап
function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open')

    if (popupActive) {
      console.log(popupActive)
      popupClose(popupActive, false)
    } else {
      bodyLock()
    }
    curentPopup.classList.add('open')
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'))
      }
    })
  }
}
// закриває попап
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open')
    if (doUnlock) {
      bodyUnLock()
    }
  }
}

// прибрати скролл body при відкритті
function bodyLock() {
  //  отримую ширину смуги скрола
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index]
      el.style.paddingRight = lockPaddingValue
    }
  }

  // додаю паддинг до body щоб не смикався контент
  body.style.paddingRight = lockPaddingValue
  body.classList.add('lock')

  // щоб не було повторних натискань
  unlock = false
  setTimeout(function () {
    unlock = true
  }, timeout)
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index]
        el.style.paddingRight = '0px'
      }
    }

    body.style.paddingRight = '0px'
    body.classList.remove('lock')
  }, timeout)

  unlock = false
  setTimeout(function () {
    unlock = true
  }, timeout)
}

// закриття попап за кнопкою esc
document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open')
    popupClose(popupActive)
  }
})

// (
//   // поліфіли для старих браузерів
//   function () {
//     // перевіряємо підтримку
//     if (!Element.prototype.closest) {
//       // реалізуєм
//       Element.prototype.closest = function (css) {
//         var node = this

//         while (node) {
//           if (node.matches(css)) return node
//           else node = node.parentElement
//         }
//         return null
//       }
//     }
//   }
// )()(function () {
//   // перевіряємо підтримку
//   if (!Element.prototype.matches) {
//     // визначаємо властивість
//     Element.prototype.matches =
//       Element.prototype.matchesSelector ||
//       Element.prototype.webkitMatchesSelector ||
//       Element.prototype.mozMatchesSelector ||
//       Element.prototype.msMatchesSelector
//   }
// })()

/* Інструкція:
Для посилання додаємо клас .popup-link та анкерне посилання на з ім'ям тат (#popup-1)
Для самого попап додаємо id c таким же ім'ям (id="popup-1") та клас popup
const timeout = 800 - повинен відповідати транзишену з яким з'являється анімація
.lock-padding - клас додаю для фіксованих об'єктів headeru (якщо він фіксований) та контенту попапа, щоб не зрушувався на ширину повзунка прокручування після відкриття
Не розібрався з проблемою відкриття нового попапа з посилання у відкритому попапа
*/