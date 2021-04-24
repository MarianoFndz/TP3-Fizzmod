import { generateRandomValues } from "../utils/randomUtils.js"



const randomController = (req, res) => {
    const objContador = {}
    const MAX_VALUE = 20
    const RANDOM_VALUE = () => Math.floor((Math.random() * MAX_VALUE) + 1)
    const INITIAL_VALUE = 1

    generateRandomValues(objContador, RANDOM_VALUE, INITIAL_VALUE)

    res.json(objContador)
}


export default randomController