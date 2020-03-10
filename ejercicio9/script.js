function onClick() {
  let x = document.getElementById("t1").value;
  let func = x => x.split('').reverse().join('');
  document.getElementById("reversed").innerHTML = func(x);
}
