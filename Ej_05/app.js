/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums. */

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const ul = document.createElement('ul')
for (album of albums) {
  const li = document.createElement('li')
  li.innerHTML = album
  ul.appendChild(li)
  console.log(album)
}
document.body.appendChild(ul)