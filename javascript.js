/* alert("Novos temas estarão disponíveis em breve!"); */
/* "input (p)" number*/
function insert(number) {
  var numero = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = numero + number;
}
/*clear*/
function clean() {
  document.getElementById("result").innerHTML = "";
}
/* back number*/
function back() {
  var resultado = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
/* result*/
function calcular() {
  var resultado = document.getElementById("result").innerHTML;
  if (result) {
    document.getElementById("result").innerHTML = eval(resultado);
  }
}
