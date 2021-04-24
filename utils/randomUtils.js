export const generateRandomValues = (objToSave, RANDOM_VALUE, INITIAL_VALUE) => {

    for (let i = 0; i <= 10000; i++) {
        const randomNumber = RANDOM_VALUE()
        const doesRandomNumberExists = objToSave[randomNumber]

        if (doesRandomNumberExists) {
            objToSave[randomNumber]++
            console.log(objToSave)
            continue
        }
        objToSave[randomNumber] = INITIAL_VALUE
    }
}