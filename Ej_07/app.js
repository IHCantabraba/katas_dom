/* Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere" */

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const TargetDiv = document.querySelector('div[data-function=printHere')
const ul = document.createElement('ul')
for (place of places) {
  const li = document.createElement('li')
  li.innerHTML = place
  ul.appendChild(li)
}
TargetDiv.appendChild(ul)
