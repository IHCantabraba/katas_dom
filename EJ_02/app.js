/* 1.1 Inserta dinamicamente en un html un div vacio con javascript. */

const div = document.createElement('div')
document.body.appendChild(div)

/*1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
const div1 = document.createElement('div')
div1.innerHTML = '<p></p>'
document.body.appendChild(div1)

/*1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.*/
const div2 = document.createElement('div')

for (i = 0; i < 6; i++) {
  const p = document.createElement('p')
  p.innerHTML = `This is 'p' number ${i}`
  div2.appendChild(p)
}
document.body.appendChild(div2)
/*1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.*/

const p1 = document.createElement('p')
p1.innerHTML = 'Soy dinámico'
document.body.appendChild(p1)

/*1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

const h2_fn_insert = document.querySelector('.fn-insert-here ')
h2_fn_insert.innerHTML = 'Wubba Lubba dub dub'

/*1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')

for (app of apps) {
  const newapp = document.createElement('li')
  newapp.innerHTML = app
  ul.appendChild(newapp)
}
document.body.appendChild(ul)
/*1.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/
const eliminar = document.querySelectorAll('.fn-remove-me')
for (elem of eliminar) {
  elem.parentElement.removeChild(elem)
}

/*1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/
const P = document.createElement('p')
P.innerHTML = 'Voy en medio!'
const firstdiv = document.querySelector('div')
firstdiv.after(P)

/*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */

const divs = document.querySelectorAll('div.fn-insert-here')

for (divNode of divs) {
  divNode.innerHTML = '<p>Voy dentro!</p>'
  console.log(divNode)
}
