const ratings = document.querySelectorAll('.rating')

if (ratings.length > 0) {
  initRatings()
}

// Основна функція
function initRatings() {
  let ratingActive, ratingValue
  // Бігаєм по усім рейтингам на сторінці
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index]
    initRating(rating)
  }

  // Иніциалізіруєм конкретний рейтинг
  function initRating(rating) {
    initRatingVars(rating)
    setRatingActiveWidth()

    // Можливість самим вказувати рейтинг, якщо у батька є такий клас
    if (rating.classList.contains('rating_set')) {
      setRating(rating)
    }
  }

  // Ініціалізація змінних
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active')
    ratingValue = rating.querySelector('.rating__value')
  }

  //Змінюємо ширину активних зірок
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05
    ratingActive.style.width = `${ratingActiveWidth}%`
  }

  // Можливість вказувати оцінку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item')
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index]
      ratingItem.addEventListener('mouseenter', function (e) {
        // Оновлення змінних
        initRatingVars(rating)
        // Оновлення активних зірок
        setRatingActiveWidth(ratingItem.value)
      })
      ratingItem.addEventListener('mouseleave', function (e) {
        // Оновлення активних зірок
        setRatingActiveWidth()
      })
      ratingItem.addEventListener('click', function (e) {
        // Оновлення змінних
        initRatingVars(rating)

        if (rating.dataset.ajax) {
          // Надіслати на сервер
          setRatingValue(ratingItem.value, rating)
        } else {
          // Відобразити вказану оцінку
          ratingValue.innerHTML = index + 1
          setRatingActiveWidth()
        }
      })
    }
  }

  async function setRatingValue(value, rating) {
    if (!rating.classList.contains('rating_sending')) {
      rating.classList.add('rating_sending')

      // Надсилання даних (value) на сервер

      let response = await fetch('rating.json', {
        method: 'GET',

        // *** Для реального відправлення на сервер
        // body: JSON.stringify({
        //   userRating: value,
        // }),
        // headers: {
        //   'content-type': 'application/json',
        // },
      })

      if (response.ok) {
        const result = await response.json()

        // Отримуємо новий рейтинг
        const newRating = result.newRating

        // Виведення нового середнього результату
        ratingValue.innerHTML = newRating

        // Оновлення активних зірок
        setRatingActiveWidth()

        rating.classList.remove('rating_sending')
      } else {
        alert('Ошибка')
        rating.classList.remove('rating_sending')
      }
    }
  }
}