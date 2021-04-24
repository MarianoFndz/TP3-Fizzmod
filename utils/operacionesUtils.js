export const getOperaciones = (params, makeErrorMsj) => {
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

export const makeErrorMsj = (params) => {
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

