// Основі модулі ==========================================
import * as flsFunctions from './functions.js'

// *** Робота з формами ***
const forms = document.querySelectorAll('.form')
const dataValue = document.querySelectorAll('[data-value]')

// Заповнюю плейсхолдер форми з data-value
if (dataValue.length > 0) {
  for (let item of dataValue) {
    item.placeholder = item.dataset.value
  }
}

// Навішую слухачів на форми

if (forms.length > 0) {
  for (let form of forms) {
    form.addEventListener('submit', formSend)
  }
}

// *** Відправляє форму, додати async перед функцією ***
function formSend(e) {
  e.preventDefault()
  const targetElement = e.target

  // роблю валідацію

  let error = 0
  let formData
  if (forms.length > 0) {
    for (let form of forms) {
      form.classList.remove('submit')
      targetElement.classList.add('submit')

      error += formValidate(form)
      // отримую дані з полів форми
      formData = new FormData(form)
    }
  }

  // formData.append('image', formImage.files[0])

  if (error === 0) {
    // видаляю спани з текстом помилки
    removeErrorElement()
    // клас для лоадера
    // form.classList.add('_sending')
    // let response = await fetch('sendmail.php', {
    //   method: 'POST',
    //   body: formData,
    // })
    // //відправляю форму
    // if (response.ok) {
    //   let result = await response.json()
    //   alert(result.message)
    //   formPreview.innerHTML = ''
    //   form.reset()
    //   form.classList.remove('_sending')
    // } else {
    //   alert('Ошибка')
    //   form.classList.remove('_sending')
    // }
    // Тимчасово виводжу попап
    const popupMessage = document.querySelector('.popup_subscribe-message')
    popupMessage.classList.add('open')
  } else {
    // alert('Заповніть обов'язкові поля')

    //***  Створюю span з помилкою
    // const errorElement = flsFunctions.element(
    //   'span',
    //   ['form__error'],
    //   'Помилка'
    // )
    // Получаю форму з класом error
    // const formError = document.querySelector('.form._error')
    // ==============
    // Получаю усі інпути з класом error
    const inputErrors = document.querySelectorAll('input._error')

    // ==============
    // видаляю спани з текстом помилки
    removeErrorElement()
    // Вставка помилки у form
    // formError.append(errorElement)

    // ==============
    // Вставлення помилки після inputa з помилкою
    if (inputErrors) {
      for (let errorItem of inputErrors) {
        const errorElement = flsFunctions.element(
          'span',
          ['form__error'],
          'Помилка'
        )
        errorItem.insertAdjacentElement('afterend', errorElement)
      }
    }
    // ==============
  }
}

// *** валідує форми ***
/**
 *
 * @param {Element} form
 * @returns {Number}
 */
function formValidate(form) {
  let error = 0
  let formReq = document.querySelectorAll('._reg')

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index]
    formRemoveError(input)

    // валідую лише натиснуту форму
    if (form.classList.contains('submit')) {
      if (input.classList.contains('_email')) {
        //Перевірка регулярним емейлом
        if (emailTest(input)) {
          formAddError(input)
          error++
        }
      } else if (
        input.getAttribute('type') === 'checkbox' &&
        input.checked === false
      ) {
        // Перевірка на натискання чекбокс
        formAddError(input)
        error++
      } else {
        // Перевірка на пусте поле
        if (input.value === '') {
          formAddError(input)
          error++
        }
      }
    }
  }
  return error
}

// *** Додає та видаляє клас _error у форми та інпуту ***
function formAddError(input) {
  input.closest('.form').classList.add('_error')
  input.classList.add('_error')
}

function formRemoveError(input) {
  input.closest('.form').classList.remove('_error')
  input.classList.remove('_error')
}

// *** Функція теста email ***
/**
 *
 * @param {Element} input
 * @returns {String}
 */
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}

// *** Функція видаляє нод елемент із текстом помилки
function removeErrorElement() {
  const errorElementAll = document.querySelectorAll('.form__error')

  if (errorElementAll.length > 0) {
    for (let el of errorElementAll) {
      el.remove()
    }
  }
}