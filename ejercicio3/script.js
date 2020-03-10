function changeImage() {
  element = document.getElementById("myImage")
  if (element.src.match("focoOn")) {
    element.src = "FocoOff.png"
  }else {
    element.src = "focoOn.png"
  }

}
