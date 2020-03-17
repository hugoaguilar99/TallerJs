const hacerTarea = (tarea, callback) =>{
  setTimeout( () => {
    console.log(`haciendo tarea ${tarea}`)
  },8000)
  callback()
}

hacerTarea("Derecho informatico", () =>{
  console.log("salir de antro")
})
