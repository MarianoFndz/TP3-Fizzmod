const currentTime = new Date().getHours();

const greet = () => {
    if (currentTime >= 6 && currentTime <= 12) return "Buenos Dias!"
    if (currentTime >= 13 && currentTime <= 19) return "Buenas Tarder!"
    return "Buenas noches!"
}

const showGreet = () => {
    console.log(greet())
}

export default showGreet
