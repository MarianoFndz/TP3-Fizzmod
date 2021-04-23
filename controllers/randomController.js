const randomController = (req, res) => {
    const objContador = {}
    for (let i = 0; i <= 10000; i++) {
        const randomNumber = Math.floor((Math.random() * 20) + 1)
        if (objContador[randomNumber]) {
            objContador[randomNumber]++
            continue
        }
        objContador[randomNumber] = 1
    }
    res.json(objContador)
}

export default randomController