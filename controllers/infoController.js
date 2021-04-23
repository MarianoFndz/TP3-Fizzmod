import { throws } from 'assert'
import fs from 'fs'

const fsp = fs.promises
const NOMBRE_ARCHIVO = `${process.cwd()}/package.json`

const infoController = async (req, res) => {
    const infoObject = {
        contenidoStr: "",
        contenidoObj: "",
        size: 0
    }

    const stats = await fsp.stat(NOMBRE_ARCHIVO)
    const contenido = await fsp.readFile(NOMBRE_ARCHIVO, 'utf8', (err, datos) => {
        console.log(err)
    })

    infoObject.size = stats.size
    infoObject.contenidoStr = contenido
    infoObject.contenidoObj = JSON.parse(contenido)

    console.log(infoObject)

    await fsp.writeFile(`${process.cwd()}/info.txt`, JSON.stringify(infoObject, null, "  "))

    res.json(infoObject)
}

export default infoController