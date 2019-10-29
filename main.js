<<<<<<< HEAD
// pone boton cerrar en todos los elementos de la lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
=======
//Crea un boton para cerrar y lo da a todo elemento de la lista
var myLista= document.getElementsByTagName("LI");
var i;
for (i=0; i<myLista.length;i++){
  var span= document.createElement("SPAN");
  var txt= document.createTextNode("\uooD7");
  span.className = "cerrar";
  span.appendChild(txt);
  myLista[i].appendChild(span);
}

//el boton cerrar oculta el elemento
var cerrar = document.getElementsByClassName("close");
for (var i = 0; i < cerrar.length; i++) {
  cerrar[i].onclick = function(){
>>>>>>> 103d0492b1bb607281193ae54e96783a5c6e03e0
    var div = this.parentElement;
    div.style.display = "none";
  }
}

<<<<<<< HEAD
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
=======
//visto cuando se da clic en un item
var lista = document.querySelector('ul');
lista.addEventListener('click',function(ev){
>>>>>>> 103d0492b1bb607281193ae54e96783a5c6e03e0
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

<<<<<<< HEAD
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var value = document.getElementById("ingreso").value;
  var t = document.createTextNode(value);
  li.appendChild(t);
  if (value === '') {
    alert("Debe ingresar tarea");
  } else {
    document.getElementById("tareas").appendChild(li);
  }
  document.getElementById("ingreso").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
=======
//crea nueva tarare cuando se aplasta anadir
function newElement(){
  var li = document.createElement("li");
  var valor = document.getElementById("input").value;
  var t = document.createTextNode(valor);
  li.appendChild(t);
  if (valor === ''){
    alert("Debe ingresar tarea");
  }else {
    document.getElementById('tasks').appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className= "cerrar";
  span.appendChild(span);

  for (var i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function(){
>>>>>>> 103d0492b1bb607281193ae54e96783a5c6e03e0
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 103d0492b1bb607281193ae54e96783a5c6e03e0
}
