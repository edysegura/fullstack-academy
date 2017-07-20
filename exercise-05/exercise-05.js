const fs = require('fs')
const { promisify } = require('util')
const readdirPromise = promisify(fs.readdir)
const fileStatPromise = promisify(fs.stat)

const path = './'

async function showFilesOnly(file) {
    const fileStat = await fileStatPromise(file)
    if(fileStat.isFile()) console.log(file)
}

async function main() {
    try {
        const files = await readdirPromise(path)
        files.forEach(showFilesOnly)
    } catch (error) {
        console.log('An error ocurred.')
    }
}

main()
