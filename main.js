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
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//visto cuando se da clic en un item
var lista = document.querySelector('ul');
lista.addEventListener('click',function(ev){
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

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
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
