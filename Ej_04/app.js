/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const button = document.querySelector('#btnToClick')

// button.addEventListener('click', (eventClick) => {
//   console.log(eventClick)
// })
/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

button.addEventListener('click', () => {
  const inputFocus = document.querySelector('.focus')
  document.querySelector('.focus').focus()
  console.log(inputFocus.value)
})

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const input_value = document.querySelector('.value')

input_value.addEventListener('input', printValue)

function printValue(text) {
  console.log(input_value.value)
}
