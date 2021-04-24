export const checkExistsParams = (paramsToCheck, params) => {
    const arrayProperties = []
    for (const property in paramsToCheck) {
        if (!params[property.toString()]) return false
    }
    return true
}

export const checkTypeParams = (params, type, errorFunc) => {
    for (const property in params) {
        if (typeof property !== type) return errorFunc(params)
    }

    return {
        correct: true
    }
}
