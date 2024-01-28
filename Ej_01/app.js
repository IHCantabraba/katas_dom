/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

const showme_btn = document.querySelector('.showme')
console.log(showme_btn)

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */
const h1_text = document.querySelector('#pillado')
console.log(h1_text.textContent)
/* 1.3 Usa querySelector para mostrar por consola todos los p */
const AllP = document.querySelectorAll('p')
for (p of AllP) {
  console.log(p.textContent)
}
/* 1.4 Usa querySelector para mostrar por consola todos los elementos con 
la clase.pokemon */
const Allpokemos = document.querySelectorAll('.pokemon')
for (p of Allpokemos) {
  console.log(p.textContent)
}
/* 1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe". */
const testME = document.querySelectorAll(`span[data-function]`)

for (test of testME) {
  console.log(test.textContent)
}

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

for (let i = 0; i < testME.length; i++) {
  if (i == 2) {
    console.log(testME[i].textContent)
  }
}
