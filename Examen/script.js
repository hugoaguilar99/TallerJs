let initTime
let endTime
let price
var myVar
const onClick1 = ()  => {
  element = document.getElementById("myImage1")
  init = document.getElementById('id1')
  end = document.getElementById('id2')
  money = document.getElementById('id3')
  if (element.src.match("MesaOn")) {
    element.src = "MesaBlanco.png"
    end.innerHTML = formatDate(endTime)
    clearInterval(myVar);
  }else {
    end.innerHTML = ''
    initTime = new Date()
    init.innerHTML = formatDate(initTime)
    myVar = new setInterval( () =>{

                  endTime = new Date()
                  price = (endTime - initTime) * 1.388888888888889e-5
                  money.innerHTML = price.toFixed(2);

    },1)
    element.src = "MesaOn.png"
  }
}
let initTime2
let endTime2
let price2
var myVar2
const onClick2 = ()  => {
  element = document.getElementById("myImage2")
  init = document.getElementById('id4')
  end = document.getElementById('id5')
  money = document.getElementById('id6')
  if (element.src.match("MesaOn")) {
    element.src = "MesaBlanco.png"
    end.innerHTML = formatDate(endTime2)
    clearInterval(myVar2);
  }else {
    end.innerHTML = ''
    initTime2 = new Date()
    init.innerHTML = formatDate(initTime2)
    myVar2 = setInterval( () =>{

                  endTime2 = new Date()
                  price2 = (endTime2 - initTime2) * 1.388888888888889e-5
                  money.innerHTML = price2.toFixed(2);

    },1)
    element.src = "MesaOn.png"
  }
}
let initTime3
let endTime3
let price3
var myVar3
const onClick3 = ()  => {
  element = document.getElementById("myImage3")
  init = document.getElementById('id7')
  end = document.getElementById('id8')
  money = document.getElementById('id9')
  if (element.src.match("MesaOn")) {
    element.src = "MesaBlanco.png"
    end.innerHTML = formatDate(endTime3)
    clearInterval(myVar3);
  }else {
    end.innerHTML = ''
    initTime3 = new Date()
    init.innerHTML = formatDate(initTime3)
    myVar3 = setInterval( () =>{

                  endTime3 = new Date()
                  price3 = (endTime3 - initTime3) * 1.388888888888889e-5
                  money.innerHTML = price3.toFixed(2);

    },1)
    element.src = "MesaOn.png"
  }
}
let initTime4
let endTime4
let price4
var myVar4
const onClick4 = ()  => {
  element = document.getElementById("myImage4")
  init = document.getElementById('id10')
  end = document.getElementById('id11')
  money = document.getElementById('id12')
  if (element.src.match("MesaOn")) {
    element.src = "MesaBlanco.png"
    end.innerHTML = formatDate(endTime4)
    clearInterval(myVar4);
  }else {
    end.innerHTML = ''
    initTime4 = new Date()
    init.innerHTML = formatDate(initTime4)
    myVar4 = setInterval( () =>{

                  endTime4 = new Date()
                  price4 = (endTime4 - initTime4) * 1.388888888888889e-5
                  money.innerHTML = price4.toFixed(2);

    },1)
    element.src = "MesaOn.png"
  }
}
let initTime5
let endTime5
let price5
var myVar5
const onClick5 = ()  => {
  element = document.getElementById("myImage5")
  init = document.getElementById('id13')
  end = document.getElementById('id14')
  money = document.getElementById('id15')
  if (element.src.match("MesaOn")) {
    element.src = "MesaBlanco.png"
    end.innerHTML = formatDate(endTime5)
    clearInterval(myVar5);
  }else {
    end.innerHTML = ''
    initTime5 = new Date()
    init.innerHTML = formatDate(initTime5)
    myVar5 = setInterval( () =>{

                  endTime5 = new Date()
                  price5 = (endTime5 - initTime5) * 1.388888888888889e-5
                  money.innerHTML = price5.toFixed(2);

    },1)
    element.src = "MesaOn.png"
  }
}
let initTime6
let endTime6
let price6
var myVar6
const onClick6 = ()  => {
  element = document.getElementById("myImage6")
  init = document.getElementById('id16')
  end = document.getElementById('id17')
  money = document.getElementById('id18')
  if (element.src.match("MesaOn")) {
    element.src = "MesaBlanco.png"
    end.innerHTML = formatDate(endTime6)
    clearInterval(myVar6);
  }else {
    end.innerHTML = ''
    initTime6 = new Date()
    init.innerHTML = formatDate(initTime6)
    myVar6 = setInterval( () =>{

                  endTime6 = new Date()
                  price6 = (endTime6 - initTime6) * 1.388888888888889e-5
                  money.innerHTML = price6.toFixed(2);

    },1)
    element.src = "MesaOn.png"
  }
}

let formatDate = date => date.toString().substr(16, 8);
