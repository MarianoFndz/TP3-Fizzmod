import { getOperaciones, makeErrorMsj } from "../utils/operacionesUtils.js"
import { checkExistsParams, checkTypeParams } from "../utils/checkParams.js"

const PARAMS_MODEL = { num1: "", num2: "", operacion: "" }

const operacionesController = (req, res) => {
    const params = req.query

    if (!checkExistsParams(PARAMS_MODEL, params)) return res.json({ error: "Invalid params" })

    const typesChecked = checkTypeParams(params, "string", makeErrorMsj)
    if (!typesChecked.correct) return res.json(typesChecked.errorMsj)

    const { num1, num2, operacion } = params
    const operaciones = getOperaciones(params, makeErrorMsj)

    const doesOperationExists = operaciones[operacion]
    if (!doesOperationExists) return res.json(makeErrorMsj(params).errorMsj)

    try {
        const resultado = operaciones[operacion](Number(num1), Number(num2))
        return res.json(resultado)
    }
    catch (err) {
        const msj = err.message
        const msjParsed = JSON.parse(msj)
        return res.json(msjParsed.errorMsj)
    }
}


export default operacionesController
