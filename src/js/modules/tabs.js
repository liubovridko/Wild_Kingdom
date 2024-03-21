import * as flsFunctions from './functions.js'
// Таби
// id табам задати унікальні
const tabsBtn = document.querySelectorAll('.tabs-item') // кнопки
const tabsBtns = document.querySelectorAll('.tabs-items') // блоки с кнопками для делегирования

tabsBtn.forEach((item) => {
  item.addEventListener('click', onTabClick)
})

function onTabClick() {
  tabsBtns.forEach((itemsBtn) => {
    itemsBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      const tabItem = e.target
      if (tabItem.classList.contains('tabs-item')) {
        // виконую дії тільки якщо у таба немає класу active
        if (!tabItem.classList.contains('_tab-active')) {
          // кнопки
          const thisBtn = tabItem.parentElement.children
          // контент
          const tabsBody = tabItem.parentElement.nextElementSibling.children
          // отримую id з дата атрибуту табу
          const tabId = tabItem.dataset.tab
          // отримую id таб елемента з дата атрибута кнопки
          const tabBodyItem = document.querySelector(tabId)

          // видаляю
          flsFunctions.removeClassest(thisBtn, '_tab-active')
          flsFunctions.removeClassest(tabsBody, '_tab-active')
          // додаю
          tabItem.classList.add('_tab-active')
          tabBodyItem.classList.add('_tab-active')
        }
      }
    })
  })
}
// Імітація натискання першу кнопку щоб додати клас active під час завантаження

// document.querySelector('.courses__tabs-item').click()
// document.querySelector('.reviews__tabs-items').click()