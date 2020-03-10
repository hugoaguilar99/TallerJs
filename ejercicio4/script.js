function doMath() {
   v1 = document.getElementById("valor1")
   v2 = document.getElementById("valor2")
   op = document.getElementById("op")

  if (op.value == 1) {
    v3 = v1 + v2;
    alert("El valor de la suma es : " + v3);
  }
}
