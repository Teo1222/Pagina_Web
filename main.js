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

// oculta el elemento cuando se hace click en cerrar
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// crea un nuevo elemento
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
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
