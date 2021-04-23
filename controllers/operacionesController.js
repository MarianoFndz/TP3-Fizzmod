const getOperaciones = (params, makeErrorMsj) => {
    return {
        suma: (num1, num2) => num1 + num2,
        resta: (num1, num2) => num1 - num2,
        multiplicacion: (num1, num2) => num1 * num2,
        division: (num1, num2) => {
            if (num2 === 0) throw new Error(JSON.stringify(makeErrorMsj(params)))
            return num1 / num2
        }
    }
}

const operacionesController = (req, res) => {
    const params = req.query
    if (!checkExistsParams(params)) return res.json({ error: "Invalid params" })

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

function checkExistsParams(params) {
    if (params["num1"] && params["num2"] && params["operacion"]) return true
    return false
}

function checkTypeParams(params, type, errorFunc) {
    for (const property in params) {
        if (typeof property !== type) return errorFunc(params)
    }

    return {
        correct: true
    }
}

// if (parseInt(property[num1] === false)) return errorFunc(params)
// if (parseInt(property[num2] === false) && property[num2] !== 0) return errorFunc(params)


function makeErrorMsj(params) {
    return {
        correct: false,
        errorMsj: {
            error: {
                num1: {
                    value: params["num1"],
                    type: typeof params["num1"],
                },
                num2: {
                    value: params["num2"],
                    type: typeof params["num2"],
                },
                operacion: {
                    value: params["operacion"],
                    type: typeof params["operacion"],
                }
            }
        }
    }
}

export default operacionesController
