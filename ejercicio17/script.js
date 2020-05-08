const payFood = () => {
  return new Promise((resolve, reject) => {
    console.log("pagando");
    setTimeout(async() => {
      const payment = await Promise.race([debitCard(), creditCard()]);
      resolve({done: true, clientId: 320646, paymentMode: payment});
    }, 3000)
  })
}

const debitCard = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tarjeta de debito")
    },1500)
  })
}

const creditCard = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tarjeta de credito")
    },6000)
  })
}

const sendFood = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Comida enviada")
      resolve({dealerId: 98828})
    }, 10000)
  })
}

const orderFood = async() => {
  try{
    await payFood();
    var order = await sendFood();
    console.log(order)
  }
  catch(error){
    console.error(error)
  }
  finally{
    console.log("Proceso finalizado")
  }
}

orderFood()
