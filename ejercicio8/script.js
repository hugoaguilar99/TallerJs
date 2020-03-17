function onFinish() {
  const message = (name, gender) => `Bienvenid${gender == "male"
    ? "o" : gender == "female"
    ? "a" : "e"} ${name}!`;
  document.getElementById("message").innerHTML = message(
    document.getElementById("name").value,
    document.getElementById("gender").value);
}
