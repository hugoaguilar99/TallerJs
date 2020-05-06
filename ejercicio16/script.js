const revisarEdad = (X) => {
	return new Promise((resolve,reject) => {
		if (X < 18) {
			reject("Menor de edad")
		} else {
			resolve("Mayor de edad")
		}
	})
}

const isLegal = guess => {
	revisarEdad(guess)
		.then(msg => console.log(msg))
		.catch(msg => console.log(msg))
}
