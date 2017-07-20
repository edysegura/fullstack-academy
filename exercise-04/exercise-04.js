const fs = require('fs')
const { promisify } = require('util')
const readdirPromise = promisify(fs.readdir)

const path = './'

async function main() {
    try {
        const files = await readdirPromise(path)
        console.log(files)
    } catch (error) {
        console.log('An error ocurred.')
    }
}

main()